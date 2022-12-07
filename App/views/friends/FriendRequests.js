import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";

import { Styles, ThemeContext } from "../../Styles";
import RequestComponent from "../../components/RequestComponent";
import { getFriends } from "../../models/friends";

const testRequests = [
  { _id: 0, username: "Bob" },
  { _id: 1, username: "Charles" },
  { _id: 2, username: "Jordan" },
  { _id: 3, username: "Amy" },
];

const FriendRequests = ({ navigation }) => {
  const [reqs, setReqs] = React.useState([]);
  const theme = React.useContext(ThemeContext);

  function populateRequests() {
    const requestObj = [];
    for (let req of reqs) {
      requestObj.push(<RequestComponent key={req._id} request={req} />);
    }
    return requestObj;
  }

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
      <View style={styles.requestContainer}>{populateRequests()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  requestContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default FriendRequests;
