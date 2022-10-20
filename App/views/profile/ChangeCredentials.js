import { View, Text, TextInput, Button} from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import StandardButton from '../../components/StandardButton'
import { useNavigation } from '@react-navigation/native'

const ChangeCredentials = ({navigation}) => {

  return (
    <View style={Styles.StandardStyles.page}>
      <Text>ChangeCredentials</Text>
      <StandardButton 
          title='Change User Name'
          onPress={() => {
            navigation.navigate('ChangeUsername');
          }}
      />
      <StandardButton 
          title='Change Password'
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        />
    </View>
  )
}

export default ChangeCredentials