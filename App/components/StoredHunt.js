import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Rating from "./Rating";
import { getAvgRating } from "../models/hunts";
import { ThemeContext } from "../Styles";

const StoredHunt = ({ hunt }) => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);

  const { title, ratings, description } = hunt;

  function handlePress() {
    navigation.navigate("HuntStack", { screen: "StoredHuntInfo", hunt: hunt });
  }

  return (
    <TouchableHighlight
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColor,
        borderColor: theme.btnBorderColor,
      }}
      underlayColor={"cyan"}
      activeOpacity={0.6}
      onPress={handlePress}
    >
      <View>
        <Text style={{ ...styles.title, color: theme.textColor }}>
          {title}{" "}
        </Text>
        <Rating
          style={styles.rating}
          rating={getAvgRating(ratings).toFixed(1)}
          size={20}
          backgroundColor="white"
        />
        <Text
          numberOfLines={1}
          style={{ ...styles.description, color: theme.textColor }}
        >
          {description}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "90%",
    marginBottom: "2%",
    padding: "5%",
  },
  title: {
    fontSize: 20,
  },
  rating: {
    position: "absolute",
    right: 0,
  },
  description: {
    fontSize: 14,
  },
});

export default StoredHunt;
