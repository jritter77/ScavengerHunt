import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../Styles";

const LocalFriends = ({ id, username }) => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);
  return (
    <TouchableHighlight
      style={{
        ...styles.container,
        backgroundColor: theme.btnBgColor,
        borderColor: theme.btnBorderColor,
      }}
      underlayColor={"cyan"}
      activeOpacity={0.6}
      onPress={() => navigation.navigate("FriendProfile")}
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
    top: "2%",
    left: "2%",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  info: {},
});

export default LocalFriends;
