import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { ThemeContext } from "../Styles";

// Standard Button with Icon Component
const StandardButtonWithIcon = ({ title, onPress, icon }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, backgroundColor: theme.btnBgColor }}
    >
      <Text style={{ ...styles.text, color: theme.btnTextColor }}>{title}</Text>
      {icon && <Image style={styles.icon} source={icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "70%",
    backgroundColor: "white",
    margin: "5%",
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5%",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 15,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default StandardButtonWithIcon;
