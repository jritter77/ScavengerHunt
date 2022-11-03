import { View, Text } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'

const LocalFriends = ({id, username}) => {
  return (
   <TouchableHighlight>
    <Text>{id}</Text>
   </TouchableHighlight>
  )
}

export default LocalFriends