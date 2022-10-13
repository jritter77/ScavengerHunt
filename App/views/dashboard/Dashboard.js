import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
        <StandardButton 
          title='My Hunts'
          onPress={() => {
            navigation.navigate('currentHunts')
          }}
        />
        <StandardButton 
          title='Sign Up'
          onPress={() => {
            navigation.navigate('SignUp');
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