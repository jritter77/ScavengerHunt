import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import ProgressBar from './ProgressBar';
import { useNavigation } from '@react-navigation/native';

const LocalHunt = ({hunt}) => {

    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('HuntStack', {
            screen: 'LocalHuntInfo', 
            hunt: hunt
        });
    }

    return (
        <TouchableHighlight style={styles.container} underlayColor={'cyan'} activeOpacity={.6} onPress={handlePress}>
            <View>
                <Text style={styles.title}>{hunt.title}</Text>
                <ProgressBar value={30} style={styles.progress} />
                <Text style={styles.description}>{hunt.description}</Text>
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
    },
    progress: {
        position: 'absolute',
        right: 0,
        width: '50%'
    }
})

export default LocalHunt