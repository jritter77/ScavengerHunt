import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderColor: 'blue',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 5
    },
    icon: {
        width: 32,
        height: 32
    }
})


export default IconButton