import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title='Sign Up'
        onPress={() => {
            navigation.navigate('SignUp')
        }}
      />
      <Button
        title='Login'
        onPress={() => {
            navigation.navigate('Dashboard')
        }}
      />
    </View>
  )
}

export default Login