import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProgressBar = ({value, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        <View style={{width: `${value}%`, ...styles.bar}}></View>
        <Text style={styles.text}>{value}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
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
        zIndex: 1
    },
})

export default ProgressBar