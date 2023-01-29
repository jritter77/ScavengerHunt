import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import HuntHistory from "../../components/HuntHistory";

// Firend Profile View
const FriendProfile = ({ navigation, route }) => {
  const theme = React.useContext(ThemeContext);

  const { username, huntHistory } = route.params.friend;

  return (
    <View style={theme.StandardStyles.page}>
      <HuntHistory username={username} huntHistory={huntHistory} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FriendProfile;
