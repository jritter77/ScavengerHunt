import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";

// Firend Profile View
const FriendProfile = ({ navigation, route }) => {
  const theme = React.useContext(ThemeContext);

  const { username, huntHistory } = route.params.friend;
  const {
    huntsCreated,
    huntsDownloaded,
    huntsPlayed,
    huntsCompleted,
    huntsPublished,
  } = huntHistory;

  return (
    <View style={theme.StandardStyles.page}>
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
    </View>
  );
};

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

export default FriendProfile;
