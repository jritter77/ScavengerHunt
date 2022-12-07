import { View, Text, TextInput, Button} from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import StandardButton from '../../components/StandardButton'
import { useNavigation } from '@react-navigation/native'

import { CustomAlert } from '../../Methods'
import { updateUsername } from '../../models/users'


const changeUserName = ({navigation}) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const [incompleteField, setIncompleteField] = React.useState('');
  
  async function verfiyInputs() {
    // verify and see if passwords match
    if(!username || !password) {
      setIncompleteField('Fields cannot be blank');
      return;
    }
    // send credentials to server for verification 
    const result = await updateUsername(username, password);
      console.log(result);
    if (result) {
      
      navigation.navigate('ChangeCredentials')
    
    }
    else {
      setFeedback('Incorrect Password')
    }
  }

  return (
    <View style={Styles.StandardStyles.page}>
      <Text>ChangeUsername</Text>
      <TextInput 
          onChangeText={setUserName}
          placeholder='UserName'
          style={Styles.StandardStyles.textInput}
        />
        <TextInput 
          onChangeText={setPassword}
          placeholder='Password'
          style={Styles.StandardStyles.textInput}
        />
        <Text>{feedback}</Text>
        <StandardButton 
          title='Submit'
          onPress={verfiyInputs}
        />
        
    </View>
  )
}

export default changeUserName