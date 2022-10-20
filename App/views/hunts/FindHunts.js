import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import StoredHunt from '../../components/StoredHunt'
import { getData } from '../../Methods'

const FindHunts = ({navigation}) => {

  const [searchTerm, setSearchTerm] = React.useState('');
  const [hunts, setHunts] = React.useState([]);

  function handleSubmit() {
    console.log(searchTerm)
    // Get search term and order by

    // Query database for search results

    // populate huntContainer with hunt objects
  }

  function populateHunts() {

    let objs = [];

    for (let hunt of hunts) {
      objs.push(<StoredHunt key={hunt._id} hunt={hunt} />);
    }

    return objs;
  }

  React.useEffect(() => {
    async function fetchData() {
      setHunts(await getData('storedHunts'))
    }

    fetchData();
  }, [])

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