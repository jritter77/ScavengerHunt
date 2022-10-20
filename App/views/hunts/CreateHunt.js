import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import StandardButton from '../../components/StandardButton'

const CreateHunt = ({navigation}) => {

  const [clueFields, setClueFields] = React.useState([]);

  const [clueVals, setClueVals] = React.useState([]);

  
  React.useEffect(() => {

    let fields = []
    

    for (let i = 0; i < 3; i++) {
      fields.push(<ClueField key={i} clueVals={clueVals} setClueVals={setClueVals} />)
    }

    setClueFields(fields);

  }, [])

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContainerContent}>
      <TextInput 
        placeholder='Title'
        style={styles.title}
      />
      <TextInput 
      multiline
      numberOfLines={4}
      placeholder='Description'
      style={styles.description}
    />
    {clueFields}
    <StandardButton
      title={'Add Clue'}
      onPress={() => {
        const arr = [...clueFields];
        arr.push(<ClueField key={arr.length} clueVals={clueVals} setClueVals={setClueVals} />);
        setClueFields(arr);
      }}
    />
    <StandardButton 
      title={'Save Changes'}
      onPress={() => console.log(clueVals)}
    />
    </ScrollView>
  )
}


const ClueField = ({clueVals, setClueVals, submitted}) => {

  const [clue, setClue] = React.useState('');
  const [answer, setAnswer] = React.useState('');

  React.useEffect(() => {
    
    setClueVals( oldState => [...oldState, {clue, answer}] );

  }, [])
  

  return (
    <View>
      <TextInput
        placeholder='Clue'
        onChangeText={setClue}
      />
      <TextInput
        placeholder='Answer'
        onChangeText={setAnswer}
      />
    </View>
  )
}






const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    width: '80%',
    fontSize: 20,
    marginBottom: '5%',
    textAlign: 'center',
    padding: '5%',
  },
  description: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5, 
    width: '80%',
    fontSize: 20,
    marginBottom: '5%',
  },
  scrollContainer: {
    backgroundColor: '#FFFDD1'
  },
  scrollContainerContent: {
    alignItems: 'center'
  },
})

export default CreateHunt