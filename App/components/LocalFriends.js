import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../Styles";

const LocalFriends = ({friend}) => {
  const {username} = friend;

  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);

  const handlePress = () => {
    navigation.navigate("FriendStack", {screen: 'FriendProfile', friend: friend});
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
        <Text style={{ ...styles.user, color: theme.textColor }}>
          {username}
        </Text>
        <Text style={{ ...styles.hunts, color: theme.textColor }}>
          Hunts Completed:{" "}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: "2%",
    padding: "5%",
  },

  user: {
    fontSize: 20,
    textAlign: "left",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  info: {},
});

export default LocalFriends;
