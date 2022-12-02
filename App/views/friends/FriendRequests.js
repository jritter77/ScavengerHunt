import { View, Text } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";

const FriendRequests = ({ navigation }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <View style={theme.StandardStyles.page}>
      <Text>FriendRequests</Text>
    </View>
  );
};

export default FriendRequests;
