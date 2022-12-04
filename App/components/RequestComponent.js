import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../Styles";

const RequestComponent = ({ id, username }) => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);
  // Finish Hunts Completed after implementation of Hunt History
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.btnBgColor,
        borderColor: theme.btnBorderColor,
      }}
    >
      <Text style={{ ...styles.user, color: theme.btnTextColor }}>
        {username}
      </Text>
      <Text style={{ ...styles.info, color: theme.btnTextColor }}>
        Hunts Completed: 0{" "}
      </Text>
    </View>
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

export default RequestComponent;
