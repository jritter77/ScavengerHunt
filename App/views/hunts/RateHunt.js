import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView, TextInput} from 'react-native-gesture-handler'
import { Styles } from '../../Styles'
import Rater from '../../components/Rater'
import StandardButton from '../../components/StandardButton'

const RateHunt = () => {
    const [rating, setRating] = React.useState(1);
    const [comment, setComment] = React.useState('');

    const handleSubmit = () => {
        console.log(rating, comment);
    }


    return (
        <ScrollView
        style={Styles.StandardStyles.scrollContainer}
        contentContainerStyle={Styles.StandardStyles.scrollContainerContent}
        >
            <Rater rating={rating} setRating={setRating}/>
            <TextInput
                multiline
                numberOfLines={8}
                onChangeText={setComment}
                placeholder='Comments'
                style={styles.comment}
            />
            <StandardButton title='Submit' onPress={handleSubmit} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    comment: {
        backgroundColor: 'white',
        width: '80%',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 20,
        padding: '5%'
    }
})



export default RateHunt