import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const RequestComponent = ({id, username}) => {
  const navigation = useNavigation();
  // Finish Hunts Completed after implementation of Hunt History
  return (
    <View style = {styles.container}>
      <Text style={styles.user}>{username}</Text>
      <Text>Hunts Completed: 0 </Text>   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      width: '90%',
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 5,
      marginBottom: '2%',
      padding: '5%'
  },

  user: {
    fontSize: 20,
    textAlign: 'left',
    top: '2%',
    left: '2%',
    paddingBottom: 10,
    fontWeight: 'bold'

    

  }
})

export default RequestComponent;