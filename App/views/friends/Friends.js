import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'
import FriendHeaderButtons  from '../../components/FriendHeaderButtons'


const Friends = ({navigation}) => {
  return (
    <View style={Styles.StandardStyles.page}>
        <StandardButton
          title='Friend Profile'
          onPress={() => {
            navigation.navigate('FriendProfile')
          } } 
      />
    </View>   
  )
}

const styles = StyleSheet.create( {
  topBar: {

  },

  button: {

    backgroundColor: "blue",
    margin: '5%',
    padding: '5%',
    borderRadius: 5,
    width: '50%',
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20pt',
    textAlign: 'left'
  },

  container: {
    backgroundColor: '#FFFDD1',
    flex: 1
    
  }
})


export default Friends