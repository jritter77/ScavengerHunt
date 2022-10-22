import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Styles from "../../Styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StandardButton from "../../components/StandardButton";
import { createLocalHunt } from "../../Methods";

const CreateHunt = ({ navigation }) => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const [clueFields, setClueFields] = React.useState([]);
  const [clueVals, setClueVals] = React.useState({});

  const handleSave = () => {
    if (!title && !desc) {
      console.log("Must enter title and description!");
      return;
    }

    createLocalHunt({ title: title, description: desc, clues: clueVals });
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
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContainerContent}
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

  React.useEffect(() => {
    setClueVals((oldState) => {
      oldState[id] = { clue, answer, entry: "" };
      return { ...oldState };
    });
  }, [clue, answer]);

  return (
    <View style={styles.clue}>
      <TextInput
        placeholder="Clue"
        onChangeText={setClue}
        style={styles.field}
      />
      <TextInput
        placeholder="Answer"
        onChangeText={setAnswer}
        style={styles.field}
      />
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
  scrollContainer: {
    backgroundColor: "#FFFDD1",
  },
  scrollContainerContent: {
    alignItems: "center",
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
});

export default CreateHunt;
