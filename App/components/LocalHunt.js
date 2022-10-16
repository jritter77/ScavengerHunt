import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import ProgressBar from './ProgressBar';

const LocalHunt = ({title, rating, description}) => {

    function handlePress() {
        console.log('pressed');
    }

    return (
        <TouchableHighlight style={styles.container} underlayColor={'cyan'} activeOpacity={.6} onPress={handlePress}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <ProgressBar value={30} />
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableHighlight>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        width: '90%',
        marginBottom: '2%',
        padding: '5%'
    },
    title: {
        fontSize: 20
    },
    rating: {
        fontSize: 20
    },
    description: {
        fontSize: 14
    }
})

export default LocalHunt