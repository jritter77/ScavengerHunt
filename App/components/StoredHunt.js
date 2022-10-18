import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StoredHunt = ({title, rating, description}) => {

    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('HuntStack', {screen: 'StoredHuntInfo'})
    }

    return (
        <TouchableHighlight style={styles.container} underlayColor={'cyan'} activeOpacity={.6} onPress={handlePress}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.rating}>{rating}</Text>
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

export default StoredHunt