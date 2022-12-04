import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Rating from './Rating';
import { getAvgRating } from '../models/hunts';

const StoredHunt = ({hunt}) => {

    const navigation = useNavigation();

    const {title, ratings, description} = hunt;

    function handlePress() {
        navigation.navigate('HuntStack', {screen: 'StoredHuntInfo', hunt: hunt})
    }

    return (
        <TouchableHighlight style={styles.container} underlayColor={'cyan'} activeOpacity={.6} onPress={handlePress}>
            <View>
                <Text style={styles.title}>{title} </Text>
                <Rating style={styles.rating} rating={getAvgRating(ratings).toFixed(1)} size={20} backgroundColor='white' />
                <Text numberOfLines={1} style={styles.description}>{description}</Text>
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
        position: 'absolute',
        right: 0
    },
    description: {
        fontSize: 14
    }
})

export default StoredHunt