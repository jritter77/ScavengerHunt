import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles } from "../../Styles";

const Hunts = ({ navigation }) => {
  return (
    <View style={Styles.StandardStyles.page}>
      <StandardButton
        title="My Hunts"
        onPress={() => {
          navigation.navigate("MyHunts");
        }}
      />
      <StandardButton
        title="Browse Hunts"
        onPress={() => {
          navigation.navigate("FindHunts");
        }}
      />
      <StandardButton
        title="Create New Hunt"
        onPress={() => {
          navigation.navigate("CreateHunt");
        }}
      />
    </View>
  );
};

export default Hunts;
