import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../../Styles'

const HuntInfo = ({navigation, route}) => {

  return (
    <View style={Styles.StandardStyles.page}>
      <Text>Hunt Id: {route.params.hunt._id}</Text>
    </View>
  )
}

export default HuntInfo