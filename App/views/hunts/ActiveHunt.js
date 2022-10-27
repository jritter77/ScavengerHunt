import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Styles from "../../Styles";
import ProgressBar from "../../components/ProgressBar";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Checkbox from "../../components/Checkbox";
import StandardButton from "../../components/StandardButton";
import { updateLocalHunt, getHuntProgress } from "../../models/hunts";

const ActiveHunt = ({ navigation, route }) => {
  const hunt = route.params.hunt;

  const [clues, setClues] = React.useState(hunt.clues);

  const [clueFields, setClueFields] = React.useState([]);


  const handleSave = async () => {
    hunt.clues = clues;
    await updateLocalHunt(hunt);
    navigation.navigate('MyHunts')
  }


  const ClueField = ({ clue }) => {
    const [entry, setEntry] = React.useState(clue.entry);

    React.useEffect(() => {
      console.log(entry)
      setClues(oldState => {
        oldState[clue.id] = ({...clue, entry: entry});
        return {...oldState}
      })
    }, [entry])

    return (
      <View style={styles.clue}>
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
          <Text style={styles.clueText}>{clue.clue}</Text>
          {(clue.type !== 'text') && <Checkbox entry={entry} setEntry={setEntry}/>}
        </View>
        {(clue.type === 'text') && <TextInput value={entry} placeholder={'answer'} onChangeText={setEntry} style={styles.entry} />}
      </View>
    );
  };

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
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContainerContent}
    >
      <ProgressBar value={getHuntProgress(hunt)} style={styles.progress} />
      {clueFields}
      <StandardButton 
        title='Save & Quit'
        onPress={handleSave}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  progress: {
    width: "80%",
  },
  clueText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  clue: {
    width: "70%",
    margin: '5%'
  },
  entry: {
    fontSize: 20,
    backgroundColor: "white",
    padding: "2%",
    borderWidth: 1,
    borderRadius: 5,
  },
  scrollContainer: {
    backgroundColor: "#FFFDD1",
  },
  scrollContainerContent: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default ActiveHunt;
