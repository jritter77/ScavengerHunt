import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'
<<<<<<< HEAD


const Friends = ({navigation}) => {
  return (
    
    <View style={Styles.StandardStyles.page}>
        <StandardButton
=======

const Friends = ({navigation}) => {
  return (
    <View style={Styles.StandardStyles.page}>
      <StandardButton 
          title='Add Friend'
          onPress={() => {
            navigation.navigate('AddFriend')
          }}
        />
        <StandardButton 
>>>>>>> main
          title='Friend Requests'
          onPress={() => {
            navigation.navigate('FriendRequests')
          } } />
        <StandardButton
          title='Friend Profile'
          onPress={() => {
            navigation.navigate('FriendProfile')
          } } />
      </View>
  )
}

const styles = StyleSheet.create( {
  topBar: {

<<<<<<< HEAD
  },
  button: {
    width: "70%",
    backgroundColor: "blue",
    margin: '5%',
    padding: '5%',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: '14pt'
  }
})


=======
>>>>>>> main
export default Friends