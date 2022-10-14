import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


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
      onChangeText = {setUser}
      placeholder = "Friend Username"
      />
    </View>
  )
}

// const styles = StyleSheet.create

export default AddFriend