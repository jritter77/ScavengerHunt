import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import ProgressBar from '../../components/ProgressBar';
import StandardButton from '../../components/StandardButton';

const StoredHuntInfo = ({navigation, route}) => {

  const {_id, title, description} = route.params.hunt;

  return (
    <View style={Styles.StandardStyles.page}>
      <Text style={styles.title}>{title}</Text>
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
    width: '70%',
    fontSize: 20,
    marginBottom: '5%',
    textAlign: 'center'
  },
  description: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5, 
    width: '70%',
    height: '20%',
    fontSize: 20,
    marginBottom: '5%',
  }
})

export default StoredHuntInfo