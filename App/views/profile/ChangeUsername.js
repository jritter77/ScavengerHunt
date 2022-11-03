import { View, Text, TextInput, Button} from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import StandardButton from '../../components/StandardButton'
import { useNavigation } from '@react-navigation/native'

import { CustomAlert } from '../../Methods'
import { updateUsername } from '../../models/users'


const changeUserName = ({navigation}) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  return (
    <View style={Styles.StandardStyles.page}>
      <Text>ChangeUsername</Text>
      <TextInput 
          onChangeText={setUserName}
          placeholder='UserName'
          style={Styles.StandardStyles.textInput}
        />
        <TextInput 
          onChangeText={setPassword}
          placeholder='Password'
          style={Styles.StandardStyles.textInput}
        />
        <Text>{feedback}</Text>
        <StandardButton 
          title='Submit'
          onPress={
            async () => {
              if (await updateUsername(username, password)) {
                navigation.navigate('ChangeCredentials');
              }
              else {
                setFeedback('Incorrect Password')
              }
            }}

        />
    </View>
  )
}

export default changeUserName