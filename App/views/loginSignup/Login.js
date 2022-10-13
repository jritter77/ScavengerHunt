import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import { TextInput } from 'react-native-gesture-handler'

const Login = ({navigation, setLoggedIn, setUserId}) => {

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
    <View style={styles.buttonContainer}>
        <TextInput 
          onChangeText={setUsername}
          placeholder='Username'
          style={styles.textInput}
        />
        <TextInput 
          onChangeText={setPassword}
          placeholder='Password'
          style={styles.textInput}
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

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    width: '70%',
    fontSize: 20,
    padding: '5%',
    borderColor: 'blue',
    borderWidth: 2,
    margin: '5%'
  }
})

export default Login