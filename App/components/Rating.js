import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemeContext } from "../Styles";

const Rating = ({ rating, size, backgroundColor, style }) => {
  let percent = (1 - rating / 5) * 100;

  const theme = React.useContext(ThemeContext);

  if (!rating) {
    return (
      <View style={{ ...styles.container, ...style }}>
        <Text style={{ fontSize: size, ...styles.text }}>No&nbsp;Rating</Text>
      </View>
    );
  }

  console.log(rating);
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
            backgroundColor: theme.backgroundColor,
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
