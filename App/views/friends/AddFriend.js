import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import StandardButton from '../../components/StandardButton'

const AddFriend = ({navigation}) => {
  const [user, setUser] = React.useState('')

  function handleSubmit() {
    // Send username

    // Verify the username exists
    
    // If not notify user

    // Else send friend request
  }
  return (
    <View style ={Styles.StandardStyles.page}>
      <Text style={styles.Text}>Add Friend</Text>
      <TextInput
      style={Styles.StandardStyles.textInput}
      placeholder = 'Friend Username'
      onChangeText = {setUser}
      />
      <StandardButton
      title = 'Submit'
      onPress = {handleSubmit}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    Text: {
      fontSize: '20pt',
    },
  })




export default AddFriend