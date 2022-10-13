import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'

const MyHunts = ({navigation}) => {
  return (
    <View style={Styles.StandardStyles.page}>
      <StandardButton 
          title='Active Hunt'
          onPress={() => {
            navigation.navigate('ActiveHunt')
          }}
        />
    </View>
  )
}


export default MyHunts