import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StandardButton from '../../components/StandardButton'
import Styles from '../../Styles'
import LocalFriends from '../../components/LocalFriends'
import { ScrollView } from 'react-native-gesture-handler'


const testFriends = [
  {_id:'cyd66',username:'Bob'},
  {_id:'corngw',username:'Amy'},
  {_id:'mpm6',username:'Kyle'},
  {_id:'odsnogs9',username:'Tim'}
]

const Friends = ({navigation}) => {
  const [friendList, setFriendList] = React.useState(testFriends);

  function populateFriends() {
    const friendsObj =  [];
    for(let friend of friendList) {
      friendsObj.push(<LocalFriends key={friend._id} id={friend._id} username={friend.username} /> )
    }
    return friendsObj
  }

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContainerContent}>
        {populateFriends()}
      <StandardButton
        title='Friend Profile'
        onPress={() => {
          navigation.navigate('FriendProfile')
        } } 
      />
    </ScrollView>   
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#FFFDD1',
  },
  scrollContainerContent: {
    alignItems: 'center'
  },
  
})
export default Friends