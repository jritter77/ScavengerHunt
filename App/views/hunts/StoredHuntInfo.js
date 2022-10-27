import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import ProgressBar from '../../components/ProgressBar';
import StandardButton from '../../components/StandardButton';
import Rating from '../../components/Rating';

const StoredHuntInfo = ({navigation, route}) => {

  const {_id, rating, title, description} = route.params.hunt;


  return (
    <View style={Styles.StandardStyles.page}>
      <Text style={styles.title}>{title}</Text>
      <Rating rating={rating} size={40} backgroundColor='#FFFDD1' />
      <Text style={styles.description}>{description}</Text>
      <StandardButton 
        title='Download Hunt'
        onPress={() => console.log('Download Hunt!')}
      />
      <StandardButton 
        title='Rate Hunt'
        onPress={() => console.log('Rate Hunt!')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    width: '80%',
    fontSize: 20,
    marginBottom: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '5%'
  },
  description: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5, 
    width: '80%',
    height: '20%',
    fontSize: 20,
    marginBottom: '5%',
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '5%'
  }
})

export default StoredHuntInfo