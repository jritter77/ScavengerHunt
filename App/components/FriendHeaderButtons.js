import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'


const FriendHeaderButtons = () => {
  return (
    <View style= {Styles.StackHeaderStyle}>
      <TouchableOpacity style= {styles.addFriend }>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create( {
    addFriend: {
      backgroundColor: 'blue',
      borderRadius: 5,
      width: '20%'
    },
    buttonText: {
      fontSize: '20pt',
      color: 'white'
    }
})

export default FriendHeaderButtons