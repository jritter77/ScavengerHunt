import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import ProgressBar from '../../components/ProgressBar';
import StandardButton from '../../components/StandardButton';
import Rating from '../../components/Rating';
import { downloadHunt } from '../../models/hunts';
import { ScrollView } from 'react-native-gesture-handler';

const StoredHuntInfo = ({navigation, route}) => {

  const {_id, rating, title, description} = route.params.hunt;

  const handleDownload = async () => {
    const newHunt = await downloadHunt(_id);
    navigation.navigate('HuntStack', {
      screen: 'LocalHuntInfo', 
      hunt: newHunt,
  });
  }


  return (
    <ScrollView 
      style={Styles.StandardStyles.scrollContainer} 
      contentContainerStyle={Styles.StandardStyles.scrollContainerContent}
    >
      <Text style={styles.title}>{title}</Text>
      <Rating rating={rating} size={40} backgroundColor='#FFFDD1' />
      <Text style={styles.description}>{description}</Text>
      <StandardButton 
        title='Download Hunt'
        onPress={handleDownload}
      />
      <StandardButton 
        title='Rate Hunt'
        onPress={() => console.log('Rate Hunt!')}
      />
    </ScrollView>
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
    minHeight: 64,
    fontSize: 20,
    marginBottom: '5%',
    textAlign: 'center'
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '5%'
  }
})

export default StoredHuntInfo