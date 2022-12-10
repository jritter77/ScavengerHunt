import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import StandardButton from "./StandardButton";
import { backgroundColor, ThemeContext } from "../Styles";

// Rater Component
const Rater = ({ rating, setRating }) => {
  const theme = React.useContext(ThemeContext);

  // Rate Button Sub-Component
  const RateButton = ({ value }) => {
    const [bgColor, setBgColor] = React.useState("grey");

    const handlePress = () => {
      setRating(value);
    };

    React.useEffect(() => {
      if (rating >= value) {
        setBgColor("blue");
      } else {
        setBgColor("grey");
      }
    }, [rating]);

    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={{ ...styles.starText, color: bgColor }}>&#9733;</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.inputBgColor,
        borderColor: theme.inputBorderColor,
      }}
    >
      <RateButton value={1} />
      <RateButton value={2} />
      <RateButton value={3} />
      <RateButton value={4} />
      <RateButton value={5} />
      <Text style={{ ...styles.text, color: theme.textColor }}>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    margin: "5%",
  },
  button: {},
  starText: {
    fontSize: 40,
  },
  text: {
    fontSize: 60,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});

export default Rater;
