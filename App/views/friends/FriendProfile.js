import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import HuntHistory from "../../components/HuntHistory";
import StandardButtonWithIcon from "../../components/StandardButtonWithIcon";

// Firend Profile View
const FriendProfile = ({ navigation, route }) => {
  const theme = React.useContext(ThemeContext);

  const { username, huntHistory } = route.params.friend;

  return (
    <View style={theme.StandardStyles.page}>
      <HuntHistory username={username} huntHistory={huntHistory} />
      <StandardButtonWithIcon
        title="Remove Friend"
        icon={require("../../assets/xIcon.png")}
        onPress={() => {
          navigation.navigate("Friends");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FriendProfile;
