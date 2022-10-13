import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'

const FindHunts = ({navigation}) => {
  return (
    <View style={Styles.StandardStyles.page}>
      <StandardButton 
          title='Hunt Info'
          onPress={() => {
            navigation.navigate('HuntInfo')
          }}
        />
    </View>
  )
}

export default FindHunts