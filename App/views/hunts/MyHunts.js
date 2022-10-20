import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import StoredHunt from '../../components/StoredHunt'
import LocalHunt from '../../components/LocalHunt'
import { getData } from '../../Methods'

const MyHunts = ({navigation}) => {

  const [searchTerm, setSearchTerm] = React.useState('');
  const [hunts, setHunts] = React.useState([]);

  function handleSubmit() {
    console.log(searchTerm)
    // Get search term and order by

    // Query local storage for hunts matching search term 

    // populate huntContainer with hunt objects
  }

  function populateHunts() {

    const huntObjs = [];
    
    for (let hunt in hunts) {
      huntObjs.push(<LocalHunt key={hunts[hunt]._id} hunt={hunts[hunt]}/>)
    }

    return huntObjs;
  }

  React.useEffect(() => {
    async function fetchData() {
      const localHunts = await getData('hunts');
      if (localHunts) {
        setHunts(localHunts);
      }
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

export default MyHunts