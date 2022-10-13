import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'

const Friends = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
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
          }}
        />
        <StandardButton 
          title='Friend Profile'
          onPress={() => {
            navigation.navigate('FriendProfile');
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
  }
})

export default Friends