import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProgressBar = ({value}) => {
  return (
    <View style={styles.container}>
        <View style={{width: `${value}%`, ...styles.bar}}>
            <Text style={styles.text}>30%</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
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
})

export default ProgressBar