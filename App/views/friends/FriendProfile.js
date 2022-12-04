import { View, Text, StyleSheet} from "react-native";
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

const styles = StyleSheet.create({
  usernameText: {
    fontSize: 20,
    paddingTop: ' 15%'
  },
  


  container: {
    height: '100%',
    backgroundColor: '#FFFDD1',
    alignItems: 'center'
  }
})

export default FriendProfile;
