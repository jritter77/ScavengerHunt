import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButtonWithIcon from "../../components/StandardButtonWithIcon";

// Dashboard View
const Dashboard = ({ navigation, route }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <View style={theme.StandardStyles.page}>
      <StandardButtonWithIcon
        title="Profile"
        icon={require("../../assets/profileIcon.png")}
        onPress={() => {
          navigation.navigate("ProfileStack");
        }}
      />
      <StandardButtonWithIcon
        title="Hunts"
        icon={require("../../assets/huntIcon.png")}
        onPress={() => {
          navigation.navigate("HuntStack");
        }}
      />
      <StandardButtonWithIcon
        title="Friends"
        icon={require("../../assets/friendsIcon.png")}
        onPress={() => {
          navigation.navigate("FriendStack");
        }}
      />
    </View>
  );
};

export default Dashboard;
