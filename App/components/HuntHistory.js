import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../Styles";

const HuntHistory = ({ username, huntHistory }) => {
  const theme = React.useContext(ThemeContext);

  const {
    huntsCreated,
    huntsDownloaded,
    huntsPlayed,
    huntsCompleted,
    huntsPublished,
  } = huntHistory;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.inputBgColor,
        borderColor: theme.inputBorderColor,
      }}
    >
      <Text style={{ ...styles.title, color: theme.inputTextColor }}>
        {username}
      </Text>
      <Text style={{ ...styles.header, color: theme.inputTextColor }}>
        Hunts Created:
      </Text>
      <Text style={{ ...styles.text, color: theme.inputTextColor }}>
        {huntsCreated}
      </Text>
      <Text style={{ ...styles.header, color: theme.inputTextColor }}>
        Hunts Downloaded:
      </Text>
      <Text style={{ ...styles.text, color: theme.inputTextColor }}>
        {huntsDownloaded}
      </Text>
      <Text style={{ ...styles.header, color: theme.inputTextColor }}>
        Hunts Played:
      </Text>
      <Text style={{ ...styles.text, color: theme.inputTextColor }}>
        {huntsPlayed}
      </Text>
      <Text style={{ ...styles.header, color: theme.inputTextColor }}>
        Hunts Completed:
      </Text>
      <Text style={{ ...styles.text, color: theme.inputTextColor }}>
        {huntsCompleted}
      </Text>
      <Text style={{ ...styles.header, color: theme.inputTextColor }}>
        Hunts Published:
      </Text>
      <Text style={{ ...styles.text, color: theme.inputTextColor }}>
        {huntsPublished}
      </Text>
    </View>
  );
};

export default HuntHistory;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: "5%",
    borderWidth: 2,
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: "10%",
  },
  text: {
    fontSize: 20,
    marginBottom: "5%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
