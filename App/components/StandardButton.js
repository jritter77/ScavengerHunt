import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const StandardButton = ({title, onPress}) => {

    const [user, setUser] = React.useState('fred');

  return (
    <TouchableOpacity 
        onPress={onPress}
        style={styles.button}
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