import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'

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


export default Friends