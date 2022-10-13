import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'


const ChangeCredentials = ({navigation}) => {
  
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [username, setNewUsername] = React.useState('');
  const [newpassword, setNewPassword] = React.useState('');
 

 
 
  return (
    <View style = {styles.text}>
    
      <TextInput 
        onChangeText = {setPassword}
        placeholder= 'Password'
        
      />
      <TextInput 
        onChangeText = {setConfirmPassword}
        placeholder= 'Confirm Password'
       
      />
      <TextInput 
        onChangeText = {setNewUsername}
        placeholder= 'Change Username'
        
      />
      <TextInput 
        onChangeText = {setNewPassword}
        placeholder = 'Change Password'
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
   width: '50%',
   font: 40,
   alignContent: 'center'

  }

})

export default ChangeCredentials