import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'



import { useNavigation } from '@react-navigation/native'

const Profile = ({navigation}) => {
  return (

    <View style={Styles.StandardStyles.page}>
      <StandardButton 
        title='Change Credentials'
        onPress={() => navigation.navigate('ChangeCredentials')}
      />
      <StandardButton 
        title='Change Username'
        onPress={() => navigation.navigate('ChangeUsername')}
      />
       <StandardButton 
        title='Change Password'
        onPress={() => navigation.navigate('ChangePassword')}
      />
       <StandardButton 
        title='Settings'
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}



export default Profile