import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'

const MyHunts = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
      <StandardButton 
          title='Active Hunt'
          onPress={() => {
            navigation.navigate('ActiveHunt')
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

export default MyHunts