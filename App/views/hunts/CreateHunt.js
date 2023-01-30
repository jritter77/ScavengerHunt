import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StandardButton from "../../components/StandardButton";
import Picker from "../../components/Picker";
import { createLocalHunt, editLocalHunt } from "../../models/hunts";
import ClueField from "../../components/ClueField";

// Create Hunt View
const CreateHunt = ({ navigation, route }) => {
  const [title, setTitle] = React.useState(
    route?.params?.hunt ? route.params.hunt.title : ""
  );
  const [desc, setDesc] = React.useState(
    route?.params?.hunt ? route.params.hunt.description : ""
  );

  const [clueFields, setClueFields] = React.useState([]);
  const [clueVals, setClueVals] = React.useState(
    route?.params?.hunt ? route.params.hunt.clueList : {}
  );

  const [feedback, setFeedback] = React.useState("");

  const theme = React.useContext(ThemeContext);

  // Save Handler
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

    if (route?.params?.hunt) {
      const editedHunt = await editLocalHunt({
        ...route.params.hunt,
        title: title,
        description: desc,
        clueList: clueVals,
      });

      console.log(editedHunt);

      if (editedHunt) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Hunts" }, { name: "MyHunts" }],
        });
        navigation.navigate("HuntStack", {
          screen: "LocalHuntInfo",
          hunt: editedHunt,
        });
      }
    } else {
      const newHunt = await createLocalHunt({
        title: title,
        description: desc,
        clueList: clueVals,
      });

      if (newHunt) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Hunts" }, { name: "MyHunts" }],
        });
        navigation.navigate("HuntStack", {
          screen: "LocalHuntInfo",
          hunt: newHunt,
        });
      }
    }
  };

  // Add clue Handler
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

  // Effect hook to set clue fields
  React.useEffect(() => {
    let fields = [];

    if (route?.params?.hunt) {
      for (let clue in clueVals) {
        console.log(clueVals[clue]);
        fields.push(
          <ClueField
            key={clueVals[clue].id}
            id={clueVals[clue].id}
            setClueVals={setClueVals}
            setClueFields={setClueFields}
            clueObj={clueVals[clue]}
          />
        );
      }
    } else {
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
          backgroundColor: theme.inputBgColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Description"
        placeholderTextColor={theme.inputTextColor}
        style={{
          ...styles.description,
          backgroundColor: theme.inputBgColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
        onChangeText={setDesc}
        value={desc}
      />
      {clueFields}
      <Text style={styles.feedback}>{feedback}</Text>
      <StandardButton title={"Add Clue"} onPress={handleAddClue} />
      <StandardButton title={"Save Changes"} onPress={handleSave} />
    </ScrollView>
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
    marginTop: "10%",
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
});

export default CreateHunt;
