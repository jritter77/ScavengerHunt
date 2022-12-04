import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
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

  const theme = React.useContext(ThemeContext);

  const handleSave = async () => {
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

    const newHunt = await createLocalHunt({
      title: title,
      description: desc,
      clueList: clueVals,
    });
    navigation.reset({
      index: 0,
      routes: [{ name: "Hunts" }, { name: "MyHunts" }],
    });
    navigation.navigate("HuntStack", {
      screen: "LocalHuntInfo",
      hunt: newHunt,
    });
  };

  const handleAddClue = () => {
    const arr = [...clueFields];
    if (arr.length) {
      arr.push(
        <ClueField
          key={parseInt(arr[arr.length - 1].props.id) + 1}
          id={parseInt(arr[arr.length - 1].props.id) + 1}
          setClueVals={setClueVals}
          setClueFields={setClueFields}
        />
      );
    } else {
      arr.push(
        <ClueField
          key={0}
          id={0}
          setClueVals={setClueVals}
          setClueFields={setClueFields}
        />
      );
    }

    setClueFields(arr);
  };

  React.useEffect(() => {
    let fields = [];

    for (let i = 0; i < 3; i++) {
      fields.push(
        <ClueField
          key={i}
          id={i}
          setClueVals={setClueVals}
          setClueFields={setClueFields}
        />
      );
    }

    setClueFields(fields);
  }, []);

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <TextInput
        placeholder="Title"
        placeholderTextColor={theme.inputTextColor}
        style={{
          ...styles.title,
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
        onChangeText={setTitle}
      />
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Description"
        placeholderTextColor={theme.inputTextColor}
        style={{
          ...styles.description,
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
        onChangeText={setDesc}
      />
      {clueFields}
      <Text style={styles.feedback}>{feedback}</Text>
      <StandardButton title={"Add Clue"} onPress={handleAddClue} />
      <StandardButton title={"Save Changes"} onPress={handleSave} />
    </ScrollView>
  );
};

const ClueField = ({ id, setClueVals, setClueFields }) => {
  const [clue, setClue] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const [pickerVal, setPickerVal] = React.useState("checkbox");

  const theme = React.useContext(ThemeContext);

  const handleRemoveClue = () => {
    setClueFields((oldState) => {
      oldState.splice(
        oldState.findIndex((e) => e.props.id === id),
        1
      );
      return [...oldState];
    });
  };

  React.useEffect(() => {
    setClueVals((oldState) => {
      oldState[id] = { id, clue, answer, entry: "", type: pickerVal };
      return { ...oldState };
    });
  }, [clue, answer]);

  return (
    <View style={styles.clue}>
      <View style={styles.clueHeader}>
        <Text style={{ ...styles.text, color: theme.textColor }}>Type:</Text>
        <TouchableOpacity
          style={styles.removeClueBtn}
          onPress={handleRemoveClue}
        >
          <Text style={{ ...styles.removeClueText, color: theme.textColor }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
      <Picker
        options={[
          { text: "checkbox", value: "checkbox" },
          { text: "text", value: "text" },
          { text: "image", value: "image" },
        ]}
        val={pickerVal}
        setVal={setPickerVal}
      />
      <Text style={{ ...styles.text, color: theme.textColor }}>Clue:</Text>
      <TextInput
        placeholder="clue"
        placeholderTextColor={theme.inputTextColor}
        onChangeText={setClue}
        style={{
          ...styles.field,
          backgroundColor: theme.backgroundColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
      />
      {pickerVal === "text" && (
        <TextInput
          placeholder="answer"
          placeholderTextColor={theme.inputTextColor}
          onChangeText={setAnswer}
          style={{
            ...styles.field,
            backgroundColor: theme.backgroundColor,
            color: theme.textColor,
            borderColor: theme.inputBorderColor,
          }}
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
    flex: 1,
  },
  description: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    fontSize: 20,
    marginBottom: "5%",
    padding: "5%",
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
  removeClueBtn: {},
  removeClueText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
  },
  clueHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default CreateHunt;
