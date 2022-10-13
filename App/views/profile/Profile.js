import { View, Text } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'

const Profile = ({navigation}) => {
  return (
    <View>
      <StandardButton 
        title='Change Credentials'
        onPress={() => navigation.navigate('ChangeCredentials')}
      />
      <StandardButton 
        title='Settings'
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default Profile