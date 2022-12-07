import { View, Text, TextInput, Button} from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import StandardButton from '../../components/StandardButton'
import { useNavigation } from '@react-navigation/native'
import { updatePassword } from '../../models/users'

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [feedback, setFeedback] = React.useState('');
  const [incompleteField, setIncompleteField] = React.useState('');

   async function verfiyInputs() {
  // verify and see if passwords match
  if(!oldPassword || !newPassword || !passwordConfirm) {
    setIncompleteField('Fields cannot be blank');
    return;
  }
  // send credentials to server for verification 
  const result = await updatePassword(oldPassword, newPassword);
    console.log(result);
  if (result) {
    
    navigation.navigate('ChangeCredentials')
  
  }
  else {
    setFeedback('Fields do not match')
  }
}


  return (
    <View style={Styles.StandardStyles.page}>
      <Text>ChangePassword</Text>
        <TextInput 
          onChangeText={setOldPassword}
          placeholder='Old Password'
          style={Styles.StandardStyles.textInput}
        />
        <TextInput 
          onChangeText={setNewPassword}
          placeholder='Password'
          style={Styles.StandardStyles.textInput}
        />
        <TextInput 
          onChangeText={setPasswordConfirm}
          placeholder='Confirm Password'
          style={Styles.StandardStyles.textInput}
        />
        <Text>{incompleteField}</Text>
        <Text>{Styles.StandardStyles.feedback}</Text>
        <StandardButton 
          title='Submit'
          onPress={verfiyInputs}
        />
    </View>
  )
}

export default ChangePassword



