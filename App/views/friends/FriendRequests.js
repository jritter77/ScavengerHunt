import { View, Text } from "react-native";
import React from "react";
import { Styles } from "../../Styles";

const FriendRequests = ({ navigation }) => {
  // Function to handleRequests
  async function handleRequests() {
    const user = await getData("user");
    const [userRequests] = React.useState([])

    // Fetch all Friend Requests

    // Display

    // Handle acceptFriend and denyRequest

}
  return (
    <View style={Styles.StandardStyles.page}>
      <Text>FriendRequests</Text>
    </View>
  );
};

export default FriendRequests;
