import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import StoredHunt from '../../components/StoredHunt'

const FindHunts = ({navigation}) => {

  const [searchTerm, setSearchTerm] = React.useState('');

  function handleSubmit() {
    console.log(searchTerm)
    // Get search term and order by

    // Query database for search results

    // populate huntContainer with hunt objects
  }

  function populateHunts() {

    let objs = [];

    for (let i=0; i<10; i++) {
      objs.push(<StoredHunt key={i} title={'Test Hunt'} rating={3.5} description={'This is a test hunt!'} />);
    }

    return objs;
  }

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContainerContent}>
      <TextInput 
        style={styles.search}
        onChangeText={setSearchTerm}
        placeholder={'Search'}
      />
      <StandardButton 
          title='Search'
          onPress={() => handleSubmit()}
      />
      <View style={styles.huntsContainer}>
        {populateHunts()}
      </View>
      <StandardButton 
        title={'Show More'}
        onPress={() => console.log('Show More!')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  huntsContainer: {
    width: '100%',
    alignItems: 'center'
  },
  scrollContainer: {
    backgroundColor: '#FFFDD1'
  },
  scrollContainerContent: {
    alignItems: 'center'
  },
  search: {
    width: '90%',
    backgroundColor: 'white',
    padding: '5%',
    fontSize: 20,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: '5%'
  }
})

export default FindHunts