import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
<<<<<<< HEAD

const StoredHunt = ({title, rating, description}) => {

    function handlePress() {
        console.log('pressed');
=======
import { useNavigation } from '@react-navigation/native'
import Rating from './Rating';

const StoredHunt = ({hunt}) => {

    const navigation = useNavigation();

    const {title, rating, description} = hunt;

    function handlePress() {
        navigation.navigate('HuntStack', {screen: 'StoredHuntInfo', hunt: hunt})
>>>>>>> main
    }

    return (
        <TouchableHighlight style={styles.container} underlayColor={'cyan'} activeOpacity={.6} onPress={handlePress}>
            <View>
<<<<<<< HEAD
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.rating}>{rating}</Text>
=======
                <Text style={styles.title}>{title} </Text>
                <Rating style={styles.rating} rating={rating} size={20} backgroundColor='white' />
>>>>>>> main
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
<<<<<<< HEAD
        fontSize: 20
=======
        position: 'absolute',
        right: 0
>>>>>>> main
    },
    description: {
        fontSize: 14
    }
})

export default StoredHunt