import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from '../../Styles'

const Login = ({setLoggedIn, setUserId}) => {

  const navigation = useNavigation();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit() {
    // Verify credentials are not blank or violate syntax

    // Send credentials to server for verification

    // Get response from server, if valid a cookie with JWT token will be returned and stored

    // Else give feedback and stay at login screen

    console.log(username, password);

    setLoggedIn(true);

    setUserId('George')
  }



  return (
    <View style={Styles.StandardStyles.page}>
        <TextInput 
          onChangeText={setUsername}
          placeholder='Username'
          style={Styles.StandardStyles.textInput}
        />
        <TextInput 
          onChangeText={setPassword}
          placeholder='Password'
          style={Styles.StandardStyles.textInput}
        />
        <StandardButton 
          title='Login'
          onPress={() => {
            handleSubmit();
          }}
        />
        <StandardButton 
          title='SignUp'
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
    </View>
  )
}




export default Login