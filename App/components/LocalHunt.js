import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import ProgressBar from "./ProgressBar";
import { useNavigation } from "@react-navigation/native";
import { getHuntProgress } from "../models/hunts";
import { ThemeContext } from "../Styles";

// Local Hunt Component
const LocalHunt = ({ hunt }) => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);

  // Press Handler
  function handlePress() {
    navigation.navigate("HuntStack", {
      screen: "LocalHuntInfo",
      hunt: hunt,
    });
  }

  return (
    <TouchableHighlight
      style={{
        ...styles.container,
        backgroundColor: theme.btnBgColor,
        borderColor: theme.btnBorderColor,
      }}
      underlayColor={"cyan"}
      activeOpacity={0.6}
      onPress={handlePress}
    >
      <View>
        <Text style={{ ...styles.title, color: theme.btnTextColor }}>
          {hunt.title}
        </Text>
        <ProgressBar value={getHuntProgress(hunt)} style={styles.progress} />
        <Text
          numberOfLines={1}
          style={{ ...styles.description, color: theme.btnTextColor }}
        >
          {hunt.description}
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
    fontSize: 20,
  },
  description: {
    fontSize: 14,
  },
  progress: {
    position: "absolute",
    right: 0,
    width: "50%",
  },
});

export default LocalHunt;
