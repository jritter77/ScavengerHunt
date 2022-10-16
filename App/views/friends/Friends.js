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


export default Friends