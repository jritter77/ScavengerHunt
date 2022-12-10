import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemeContext } from "../Styles";

// Rating Component
const Rating = ({ rating, size, backgroundColor, style }) => {
  let percent = (1 - rating / 5) * 100;

  const theme = React.useContext(ThemeContext);

  // Display 'No Rating' if rating is less than 0.1
  if (rating < 0.1) {
    return (
      <View style={{ ...styles.container, ...style }}>
        <Text
          style={{ fontSize: size, ...styles.text, color: theme.textColor }}
        >
          No&nbsp;Rating
        </Text>
      </View>
    );
  }

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={{ ...styles.text, fontSize: size, color: theme.textColor }}>
        {rating}
      </Text>
      <View>
        <Text style={{ ...styles.stars, fontSize: size }}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </Text>
        <View
          style={{
            ...styles.cover,
            width: `${percent}%`,
            backgroundColor: backgroundColor,
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "inherit",
    marginBottom: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  stars: {
    color: "blue",
  },
  cover: {
    position: "absolute",
    height: "100%",
    right: "0%",
    overflow: "hidden",
  },
  text: {
    marginRight: "5%",
  },
});

export default Rating;
