import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles, ThemeContext } from "../../Styles";

import { useNavigation } from "@react-navigation/native";
import { removeData } from "../../Methods";
import StandardButtonWithIcon from "../../components/StandardButtonWithIcon";

const Profile = ({ navigation, setLoggedIn }) => {
  const theme = React.useContext(ThemeContext);


  const handleSignOut = async () => {
    await removeData('user');
    setLoggedIn(false);
  }


  return (
    <View style={theme.StandardStyles.page}>
      <StandardButtonWithIcon
        title="Change User Name"
        icon={require('../../assets/editIcon.png')}
        onPress={() => {
          navigation.navigate("ChangeUsername");
        }}
      />
      <StandardButtonWithIcon
        title="Change Password"
        icon={require('../../assets/editIcon.png')}
        onPress={() => {
          navigation.navigate("ChangePassword");
        }}
      />
      <StandardButtonWithIcon
        title="Settings"
        icon={require('../../assets/gearIcon.png')}
        onPress={() => navigation.navigate("Settings")}
      />
      <StandardButtonWithIcon
        title="Sign Out"
        icon={require('../../assets/backIcon.png')}
        onPress={handleSignOut}
      />
    </View>
  );
};

export default Profile;
