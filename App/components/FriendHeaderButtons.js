import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Styles } from "../Styles";

const mail = require("../assets/mailSymbol.png");

const FriendHeaderButtons = ({ navigation }) => {
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
  const AddFriendButton = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("AddFriend");
        }}
      >
        <Text>☩</Text>
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
