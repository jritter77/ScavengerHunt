import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles } from "../../Styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StandardButton from "../../components/StandardButton";
import Picker from "../../components/Picker";
import { createLocalHunt } from "../../models/hunts";

const CreateHunt = ({ navigation }) => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const [clueFields, setClueFields] = React.useState([]);
  const [clueVals, setClueVals] = React.useState({});

  const [feedback, setFeedback] = React.useState("");

  const handleSave = () => {
    if (!title && !desc) {
      setFeedback("Please enter a Title and Description");
      return;
    }

    for (let clue in clueVals) {
      if (clueVals[clue].clue === "") {
        setFeedback("Please enter all clue prompts");
        return;
      }
    }

    createLocalHunt({ title: title, description: desc, clueList: clueVals });
    navigation.navigate("Hunts");
  };

  React.useEffect(() => {
    let fields = [];

    for (let i = 0; i < 3; i++) {
      fields.push(<ClueField key={i} id={i} setClueVals={setClueVals} />);
    }

    setClueFields(fields);
  }, []);

  return (
    <ScrollView
      style={Styles.StandardStyles.scrollContainer}
      contentContainerStyle={Styles.StandardStyles.scrollContainerContent}
    >
      <TextInput
        placeholder="Title"
        style={styles.title}
        onChangeText={setTitle}
      />
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Description"
        style={styles.description}
        onChangeText={setDesc}
      />
      {clueFields}
      <Text style={styles.feedback}>{feedback}</Text>
      <StandardButton
        title={"Add Clue"}
        onPress={() => {
          const arr = [...clueFields];
          arr.push(
            <ClueField
              key={arr.length}
              id={arr.length}
              setClueVals={setClueVals}
            />
          );
          setClueFields(arr);
        }}
      />
      <StandardButton title={"Save Changes"} onPress={handleSave} />
    </ScrollView>
  );
};

const ClueField = ({ id, setClueVals }) => {
  const [clue, setClue] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const [pickerVal, setPickerVal] = React.useState("checkbox");

  React.useEffect(() => {
    setClueVals((oldState) => {
      oldState[id] = { id, clue, answer, entry: "", type: pickerVal };
      return { ...oldState };
    });
  }, [clue, answer]);

  return (
    <View style={styles.clue}>
      <Text style={styles.text}>Type:</Text>
      <Picker
        options={[
          { text: "checkbox", value: "checkbox" },
          { text: "text", value: "text" },
          { text: "image", value: "image" },
        ]}
        val={pickerVal}
        setVal={setPickerVal}
      />
      <Text style={styles.text}>Clue:</Text>
      <TextInput
        placeholder="clue"
        onChangeText={setClue}
        style={styles.field}
      />
      {pickerVal === "text" && (
        <TextInput
          placeholder="answer"
          onChangeText={setAnswer}
          style={styles.field}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    fontSize: 20,
    marginBottom: "5%",
    textAlign: "center",
    padding: "5%",
  },
  description: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    fontSize: 20,
    marginBottom: "5%",
  },
  field: {
    backgroundColor: "white",
    fontSize: 20,
    padding: "2%",
    borderWidth: 1,
    borderRadius: 5,
  },
  clue: {
    marginBottom: "5%",
    width: "70%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  feedback: {
    color: "red",
    fontSize: 20,
  },
});

export default CreateHunt;
