import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles, ThemeContext } from "../../Styles";
import StandardButtonWithIcon from "../../components/StandardButtonWithIcon";

// Hunts View
const Hunts = ({ navigation }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <View style={theme.StandardStyles.page}>
      <StandardButtonWithIcon
        title="My Hunts"
        icon={require("../../assets/huntIcon.png")}
        onPress={() => {
          navigation.navigate("MyHunts");
        }}
      />
      <StandardButtonWithIcon
        title="Browse Hunts"
        icon={require("../../assets/searchIcon.png")}
        onPress={() => {
          navigation.navigate("FindHunts");
        }}
      />
      <StandardButtonWithIcon
        title="Create New Hunt"
        icon={require("../../assets/editIcon.png")}
        onPress={() => {
          navigation.navigate("CreateHunt");
        }}
      />
    </View>
  );
};

export default Hunts;
