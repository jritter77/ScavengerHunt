import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
      <StandardButton 
        title='Profile'
        onPress={() => {
          navigation.navigate('ProfileStack');
        }}
      />
      <StandardButton 
        title='Hunts'
        onPress={() => {
          navigation.navigate('HuntStack')
        }}
      />
      <StandardButton 
        title='Friends'
        onPress={() => {
          navigation.navigate('FriendStack')
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

export default Dashboard