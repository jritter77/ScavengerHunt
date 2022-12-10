import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemeContext } from "../Styles";

// Progress Bar Component
const ProgressBar = ({ value, style }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.container,
        ...style,
        backgroundColor: theme.btnBgColor,
        borderColor: theme.btnBorderColor,
      }}
    >
      <View style={{ width: `${value}%`, ...styles.bar }}></View>
      <Text style={{ ...styles.text, color: theme.textColor }}>{value}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "white",
  },
  bar: {
    backgroundColor: "#53ECFC",
    height: "100%",
    position: "absolute",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    zIndex: 1,
  },
});

export default ProgressBar;
