import { View, Text } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";

const FriendProfile = ({ navigation }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <View style={theme.StandardStyles.page}>
      <Text>FriendProfile</Text>
    </View>
  );
};

export default FriendProfile;
