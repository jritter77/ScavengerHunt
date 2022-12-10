import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

// Standard Button Component
const StandardButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "70%",
    backgroundColor: "blue",
    margin: "5%",
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 2,
    padding: "5%",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default StandardButton;
