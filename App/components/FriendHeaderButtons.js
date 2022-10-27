import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from '../Styles'



const FriendHeaderButtons = ({navigation}) => {

  const FriendRequestsButton = () => {
    return (
      <TouchableOpacity 
      style={styles.button}
      onPress={ () => {navigation.navigate('FriendRequests')}} >
      <Text style={styles.buttonText}>☺</Text>
      </TouchableOpacity>
    )}
  const AddFriendButton = () => {
    return (
      <TouchableOpacity 
    style={styles.button}
    onPress={ () => {navigation.navigate('AddFriend')}} >
    <Text style={styles.buttonText}>☩</Text>
    </TouchableOpacity>
    ) }
    
  return (
    <View style={styles.container}>
      <FriendRequestsButton/>
      <AddFriendButton/>
    </View>
  )
}

const styles = StyleSheet.create( {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },

    button: {
      backgroundColor: 'green',
      flex: 1,
      position: 'relative',
      marginLeft: 3,
      marginRight: 3,
      width: '2em'


    },
 
    buttonText: {
      color: 'white',
      fontSize: '14pt',
      textAlign: 'center'
    }

})

export default FriendHeaderButtons