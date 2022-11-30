import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import { Styles } from "../../Styles";
import { getFriendReq } from "../../models/friends";

const FriendRequests = ({ navigation }) => {
  const [req, userReqs] = React.useState([]);
  
  getFriendReq();

  
  return (
    <ScrollView style= {Styles.StandardStyles.scrollContainer}>
      <View style={Styles.StandardStyles.page}>
      </View>
    </ScrollView>
  );
};

export default FriendRequests;
