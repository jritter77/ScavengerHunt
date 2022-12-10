import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";

import { Styles, ThemeContext } from "../../Styles";
import RequestComponent from "../../components/RequestComponent";
import { getFriends } from "../../models/friends";

// Friend Requests View
const FriendRequests = ({ navigation }) => {
  const [reqs, setReqs] = React.useState([]);
  const theme = React.useContext(ThemeContext);

  // populate requests function
  function populateRequests() {
    const requestObj = [];
    for (let req of reqs) {
      requestObj.push(<RequestComponent key={req._id} request={req} />);
    }
    return requestObj;
  }

  // Effect hook to fetch friend requests
  React.useEffect(() => {
    const fetchFriendReqs = async () => {
      const result = await getFriends();
      setReqs(result.friendRequests);
    };

    fetchFriendReqs();
  }, []);

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerstyle={theme.StandardStyles.scrollContainerContent}
    >
      <View style={styles.requestContainer}>
        {reqs.length === 0 && (
          <Text key={0} style={{ ...styles.noReqs, color: theme.textColor }}>
            You do not currently have any friend requests.
          </Text>
        )}
        {populateRequests()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  requestContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "10%",
  },
  noReqs: {
    textAlign: "center",
    fontSize: 20,
    width: "100%",
  },
});

export default FriendRequests;
