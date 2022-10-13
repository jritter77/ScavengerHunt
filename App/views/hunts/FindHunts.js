import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'

const FindHunts = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
      <StandardButton 
          title='Hunt Info'
          onPress={() => {
            navigation.navigate('HuntInfo')
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

export default FindHunts