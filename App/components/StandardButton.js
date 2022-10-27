import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const StandardButton = ({title, onPress, color}) => {

    if (!color) {
        color = 'blue';
    }

  return (
    <TouchableOpacity 
        onPress={onPress}
        style={{...styles.button, backgroundColor: color}}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: "70%",
        backgroundColor: "blue",
        margin: '5%',
        padding: '5%',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})




export default StandardButton