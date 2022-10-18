import { View, Text, TextInput, Button} from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import StandardButton from '../../components/StandardButton'
import { useNavigation } from '@react-navigation/native'

const changeUserName = ({navigation}) => {
  const [changeUserName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

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
        <StandardButton 
          title='Submit'
          onPress={() => {
            navigation.navigate('ChangeCredentials');
          }}
        />
    </View>
  )
}

export default changeUserName