import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'

const Profile = ({navigation}) => {
  return (
    <View style={Styles.StandardStyles.page}>
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