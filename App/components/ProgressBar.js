import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

<<<<<<< HEAD
const ProgressBar = ({value}) => {
  return (
    <View style={styles.container}>
        <View style={{width: `${value}%`, ...styles.bar}}>
            <Text style={styles.text}>30%</Text>
        </View>
=======
const ProgressBar = ({value, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        <View style={{width: `${value}%`, ...styles.bar}}></View>
        <Text style={styles.text}>{value}%</Text>
>>>>>>> main
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
<<<<<<< HEAD
        backgroundColor: 'white'
    },
    bar: {
        backgroundColor: '#53ECFC'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
=======
        backgroundColor: 'white',
    },
    bar: {
        backgroundColor: '#53ECFC',
        height: '100%',
        position: 'absolute'
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
>>>>>>> main
})

export default ProgressBar