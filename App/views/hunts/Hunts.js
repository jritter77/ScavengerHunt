import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'

const Hunts = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
      <StandardButton 
          title='My Hunts'
          onPress={() => {
            navigation.navigate('MyHunts')
          }}
        />
        <StandardButton 
          title='Browse Hunts'
          onPress={() => {
            navigation.navigate('FindHunts')
          }}
        />
        <StandardButton 
          title='Create New Hunt'
          onPress={() => {
            navigation.navigate('CreateHunt');
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

export default Hunts