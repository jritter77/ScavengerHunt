import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'


const AddFriend = ({navigation}) => {
  const [user, setUser] = React.useState('')

function handleSubmit() {
  // Verify the username exists

  // If not notify user

  // Else send friend request
}
  return (
    <View>
      <Text>Add Friend</Text>
      <TextInput
      placeholder = "Friend Username"
      onChangeText = {setUser}
      />
    </View>
  )
}

// const styles = StyleSheet.create

export default AddFriend