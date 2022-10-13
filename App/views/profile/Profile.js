import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'

const Profile = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
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

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile