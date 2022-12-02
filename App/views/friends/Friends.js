import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles, ThemeContext } from "../../Styles";
import LocalFriends from "../../components/LocalFriends";
import { ScrollView } from "react-native-gesture-handler";

const testFriends = [
  { _id: "cyd66", username: "Bob" },
  { _id: "corngw", username: "Amy" },
  { _id: "mpm6", username: "Kyle" },
  { _id: "odsnogs9", username: "Tim" },
];

const Friends = ({ navigation }) => {
  const [friendList, setFriendList] = React.useState(testFriends);
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

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      {populateFriends()}
      <StandardButton
        title="Friend Profile"
        onPress={() => {
          navigation.navigate("FriendProfile");
        }}
      />
    </ScrollView>
  );
};

export default Friends;
