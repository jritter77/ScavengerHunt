import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import HuntHistory from "../../components/HuntHistory";
import StandardButtonWithIcon from "../../components/StandardButtonWithIcon";
import { removeFriend } from "../../models/friends";
import { ToastContext } from "../../components/Toast";
import { CustomAlert } from "../../Methods";

// Firend Profile View
const FriendProfile = ({ navigation, route }) => {
  const theme = React.useContext(ThemeContext);
  const setToast = React.useContext(ToastContext);

  const { username, huntHistory } = route.params.friend;

  const handleRemove = () => {
    CustomAlert(
      "Remove Friend",
      "Are you sure you would like remove this friend?",
      async () => {
        await removeFriend(username);
        setToast("Friend Removed");
        navigation.reset({
          index: 0,
          routes: [{ name: "Friends" }],
        });
      }
    );
  };

  return (
    <View style={theme.StandardStyles.page}>
      <HuntHistory username={username} huntHistory={huntHistory} />
      <StandardButtonWithIcon
        title="Remove Friend"
        icon={require("../../assets/xIcon.png")}
        onPress={handleRemove}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FriendProfile;
