import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import ProgressBar from "../../components/ProgressBar";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Checkbox from "../../components/Checkbox";
import StandardButton from "../../components/StandardButton";
import {
  updateLocalHunt,
  getHuntProgress,
  getUserHunts,
} from "../../models/hunts";
import { incrementCompleted, incrementPlayed } from "../../models/users";
import { ToastContext } from "../../components/Toast";

// Active Hunt View
const ActiveHunt = ({ navigation, route }) => {
  const hunt = route.params.hunt;
  const theme = React.useContext(ThemeContext);
  const setToast = React.useContext(ToastContext);

  const [clues, setClues] = React.useState(hunt.clueList);
  const [clueFields, setClueFields] = React.useState([]);

  // Save Hunt Handler
  const handleSave = async () => {
    const oldHunt = { ...hunt };
    hunt.clueList = clues;
    await updateLocalHunt(hunt);

    const oldProgress = getHuntProgress(oldHunt);
    const newProgress = getHuntProgress(hunt);

    if (oldProgress < newProgress && newProgress === 100) {
      await incrementCompleted();
    }

    if (oldProgress === 0 && newProgress > 0) {
      await incrementPlayed();
    }

    setToast("Progress Saved");

    navigation.reset({
      index: 0,
      routes: [{ name: "Hunts" }, { name: "MyHunts" }],
    });
    navigation.navigate("HuntStack", {
      screen: "LocalHuntInfo",
      hunt: hunt,
    });
  };

  // Clue Field Sub-Component
  const ClueField = ({ clue }) => {
    const [entry, setEntry] = React.useState(clue.entry);
    const [valid, setValid] = React.useState("red");

    React.useEffect(() => {
      setClues((oldState) => {
        oldState[clue.id] = { ...clue, entry: entry };
        return { ...oldState };
      });

      if (entry) {
        entry === clue.answer ? setValid("green") : setValid("red");
      } else {
        setValid("black");
      }
    }, [entry]);

    return (
      <View style={styles.clue}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...styles.clueText, color: theme.textColor }}>
            {clue.clue}
          </Text>
          {clue.type !== "text" && (
            <Checkbox entry={entry} setEntry={setEntry} />
          )}
        </View>
        {clue.type === "text" && (
          <TextInput
            value={entry}
            placeholder={"answer"}
            onChangeText={setEntry}
            style={{ ...styles.entry, borderColor: valid }}
          />
        )}
      </View>
    );
  };

  // Effect hook to set Clues
  React.useEffect(() => {
    for (let clue in clues) {
      setClueFields((oldState) => [
        ...oldState,
        <ClueField key={clue} clue={clues[clue]} />,
      ]);
    }
  }, []);

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={Styles.StandardStyles.scrollContainerContent}
    >
      <ProgressBar value={getHuntProgress(hunt)} style={styles.progress} />
      {clueFields}
      <StandardButton title="Save & Quit" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  progress: {
    width: "80%",
    marginTop: "10%",
  },
  clueText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  clue: {
    width: "70%",
    margin: "5%",
  },
  entry: {
    fontSize: 20,
    backgroundColor: "white",
    padding: "2%",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ActiveHunt;
