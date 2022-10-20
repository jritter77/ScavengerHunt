import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import ProgressBar from '../../components/ProgressBar'
import { getHuntProgress } from '../../Methods'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const ActiveHunt = ({navigation, route}) => {

  const hunt = route.params.hunt;

  const [clues, setClues] = React.useState(hunt.clues);

  const [clueFields, setClueFields] = React.useState([]);

  const ClueField = ({clue}) => {

    const [entry, setEntry] = React.useState(clue.entry)

    return (
      <View>
        <Text style={styles.clue}>{clue.clue}</Text>
        <TextInput 
          value={entry}
          onChangeText={setEntry}
          style={styles.entry}
        />
      </View>
    );
  }

  React.useEffect(() => {
    for (let clue in clues) {
      setClueFields(oldState => [...oldState, <ClueField key={clue} clue={clues[clue]} />]);
    }
  }, []);

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContainerContent}>
      <ProgressBar value={getHuntProgress(hunt)} style={styles.progress} />
      <View>
        {clueFields}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  progress: {
    width: '80%'
  },
  clue: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  entry: {
    fontSize: 20,
    backgroundColor: 'white',
    padding: '2%',
    borderWidth: 1,
    borderRadius: 5
  },
  scrollContainer: {
    backgroundColor: '#FFFDD1'
  },
  scrollContainerContent: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
})

export default ActiveHunt