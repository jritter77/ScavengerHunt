import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ThemeContext } from "../Styles";

// Checkbox component
const Checkbox = ({ entry, setEntry }) => {
  const [checked, setChecked] = React.useState(entry);
  const theme = React.useContext(ThemeContext);

  // press handler
  const handlePress = () => {
    setEntry(!entry);
    setChecked(!checked);
  };

  return (
    <TouchableWithoutFeedback
      style={{
        ...styles.container,
        backgroundColor: theme.btnBgColor,
        borderColor: theme.btnBorderColor,
      }}
      onPress={handlePress}
    >
      {checked === true && (
        <Text style={{ ...styles.text, color: theme.btnTextColor }}>X</Text>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Checkbox;
