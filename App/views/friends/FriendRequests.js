import { View, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import { Styles } from "../../Styles";
import RequestComponent from "../../components/RequestComponent";

const testRequests = [
  {_id: 0, username: 'Bob'},
  {_id: 1, username: 'Charles'},
  {_id: 2, username: 'Jordan'},
  {_id: 3, username: 'Amy'},
]


const FriendRequests = ({ navigation }) => {
  const [reqs, setReqs] = React.useState(testRequests);
  function populateRequests() {
    const requestObj = [];
    for (let req of reqs) {
      requestObj.push(
        <RequestComponent
        key = {req._id}
        id = {req._id}
        username = {req.username}
        />
      );
    }
    return requestObj;
  }

  
  return (
    <ScrollView style= {Styles.StandardStyles.scrollContainer} 
    contentContainerstyle = {Styles.StandardStyles.scrollContainerContent}>
      <View style = {styles.requestContainer}>
        {populateRequests()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  requestContainer: {
    width: '100%',
    paddingLeft: '10%',
    marginTop: '15%'
  }
})

export default FriendRequests;
