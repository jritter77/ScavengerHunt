import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles } from "../../Styles";

const Dashboard = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={Styles.StandardStyles.page}>
      <StandardButton
        title="Profile"
        onPress={() => {
          navigation.navigate("ProfileStack");
        }}
      />
      <StandardButton
        title="Hunts"
        onPress={() => {
          navigation.navigate("HuntStack");
        }}
      />
      <StandardButton
        title="Friends"
        onPress={() => {
          navigation.navigate("FriendStack");
        }}
      />
    </View>
  );
};

export default Dashboard;
