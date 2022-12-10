import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const homeImg = require("../assets/homeSymbol.png");

// Home button component for navbar
const HomeButton = () => {
  // Navigation Hook
  const navigation = useNavigation();

  // Press handler
  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image style={styles.icon} source={homeImg}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default HomeButton;
