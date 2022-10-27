import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Styles from '../../Styles'
import { loginUser } from '../../models/users'

const Login = ({setLoggedIn, setUserId}) => {

  const navigation = useNavigation();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit() {
    // Verify credentials are not blank or violate syntax
    if (!username || !password) {
      console.log('username and password cannot be blank!');
      return;
    }

    // Send credentials to server for verification
    const result = await loginUser(username, password);

    if (result) {
      setLoggedIn(true);
    }
    
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