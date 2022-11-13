import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'

const LocalFriends = ({id, username}) => {
  return (
   <TouchableHighlight style={styles.container}>
    <Text style={styles.user}>{username}</Text>
    <View></View>
   </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '70%',
      marginBottom: '5%',
      backgroundColor: 'white'
  },

  user: {
    borderWidth: 2,
    borderRadius: 5,
    width: '80%',
    fontSize: 20,
    marginBottom: '5%',
    textAlign: 'center',
    padding: '5%',
    fontWeight: 'bold'
    

  }
})

export default LocalFriends