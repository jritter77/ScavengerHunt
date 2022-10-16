import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import ProgressBar from '../../components/ProgressBar';
import StandardButton from '../../components/StandardButton';

const HuntInfo = ({navigation, route}) => {

  const {_id, title, description} = route.params.hunt;

  return (
    <View style={Styles.StandardStyles.page}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progress}>Progress:</Text>
        <ProgressBar value={30} />
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.group}>Group</Text>
      <StandardButton 
        title='Invite Friend'
        onPress={() => console.log('Invite Friend!')}
      />
      <StandardButton 
        title='Start/Continue'
        onPress={() => console.log('Start/Continue!')}
      />
      <StandardButton 
        title='Delete Hunt'
        onPress={() => console.log('Delete Hunt!')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
    marginBottom: '5%'
  },
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
  },
  group: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
    width: '70%',
    fontSize: 20,
    marginBottom: '5%',
    textAlign: 'center'
  },
  progress: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '10%'
  }
})

export default HuntInfo