import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import LocalFriends from "../../components/LocalFriends";
import { ScrollView } from "react-native-gesture-handler";

import { getFriends } from "../../models/friends";
import { getUser } from "../../models/users";

const Friends = ({ navigation }) => {
  const [friendList, setFriendList] = React.useState([]);
  const theme = React.useContext(ThemeContext);

  function populateFriends() {
    const friendsObj = [];
    for (let friend of friendList) {
      friendsObj.push(
        <LocalFriends
          key={friend._id}
          id={friend._id}
          username={friend.username}
        />
      );
    }
    return friendsObj;
  }

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
      <View style={styles.friendsContainer}>{populateFriends()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  friendsContainer: {
    width: "100%",
    paddingLeft: "10%",
    marginTop: "15%",
  },
});

export default Friends;
