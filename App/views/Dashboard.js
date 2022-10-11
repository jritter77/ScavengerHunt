import { View, Text, Button } from 'react-native'
import React from 'react'

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title='Go to Profile'
        onPress={() => {
            navigation.navigate('Profile')
        }}
      />
    </View>
  )
}

export default Dashboard