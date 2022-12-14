import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import LocalFriends from "../../components/LocalFriends";
import { ScrollView } from "react-native-gesture-handler";

import { getFriends } from "../../models/friends";
import { getUser } from "../../models/users";

// Friends View
const Friends = (props) => {
  const [friendList, setFriendList] = React.useState([]);
  const theme = React.useContext(ThemeContext);

  // Populate Friends
  function populateFriends() {
    const friendsObj = [];

    for (let friend of friendList) {
      friendsObj.push(<LocalFriends key={friend._id} friend={friend} />);
    }

    return friendsObj;
  }

  // Effect Hook to fetch friends
  React.useEffect(() => {
    const fetchFriends = async () => {
      const result = await getFriends();
      let friends = [];

      for (let friend of result.friends) {
        friends.push(await getUser(friend));
      }

      setFriendList(friends);
    };

    fetchFriends();
  }, []);

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <View style={styles.friendsContainer}>
        {friendList.length === 0 && (
          <Text key={0} style={{ ...styles.noFriends, color: theme.textColor }}>
            {`You have not added any friends yet.

          Please press the "+" button above to send a friend request.`}
          </Text>
        )}
        {populateFriends()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  friendsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "10%",
  },
  noFriends: {
    textAlign: "center",
    width: "70%",
    fontSize: 20,
  },
});

export default Friends;
