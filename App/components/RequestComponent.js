import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../Styles";
import IconButton from "./IconButton";
import { acceptFriendRequest, declineFriendRequest } from "../models/friends";
import { ToastContext } from "./Toast";

// Friend request Component
const RequestComponent = ({ request }) => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);
  const { id, username } = request;
  const setToast = React.useContext(ToastContext);

  // press handler to accept friend request
  const handleAccept = async () => {
    await acceptFriendRequest(request);
    setToast("Friend Request Accepted");
    navigation.reset({
      index: 0,
      routes: [{ name: "Friends" }, { name: "FriendRequests" }],
    });
  };

  const handleDecline = async () => {
    await declineFriendRequest(request);
    setToast("Friend Request Declined");
    navigation.reset({
      index: 0,
      routes: [{ name: "Friends" }, { name: "FriendRequests" }],
    });
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.btnBgColor,
        borderColor: theme.btnBorderColor,
      }}
    >
      <Text style={{ ...styles.user, color: theme.btnTextColor }}>
        {username}
      </Text>
      <IconButton
        icon={require("../assets/checkIcon.png")}
        onPress={handleAccept}
      />
      <IconButton
        icon={require("../assets/xIcon.png")}
        onPress={handleDecline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: "2%",
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  user: {
    fontSize: 20,
    textAlign: "left",
    top: "2%",
    left: "2%",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  info: {},
});

export default RequestComponent;
