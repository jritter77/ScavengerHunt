import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Styles } from "../Styles";

const mail = require("../assets/mailSymbol.png");

// Friend Header Buttons component
const FriendHeaderButtons = ({ navigation }) => {
  // Friend Request Button
  const FriendRequestsButton = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("FriendRequests");
        }}
      >
        <Image style={{ width: 40, height: 40 }} source={mail} />
      </TouchableOpacity>
    );
  };

  // Add Friend Button
  const AddFriendButton = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("AddFriend");
        }}
      >
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FriendRequestsButton />
      <AddFriendButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#1BA1E2",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 12,
    width: 35,
    height: 30,
  },
});

export default FriendHeaderButtons;
