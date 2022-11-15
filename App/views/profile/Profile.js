import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles } from "../../Styles";

import { useNavigation } from "@react-navigation/native";
import { removeData } from "../../Methods";

const Profile = ({ navigation, setLoggedIn }) => {


  const handleSignOut = async () => {
    await removeData('user');
    setLoggedIn(false);
  }


  return (
    <View style={Styles.StandardStyles.page}>
      <StandardButton
        title="Change Credentials"
        onPress={() => navigation.navigate("ChangeCredentials")}
      />
      <StandardButton
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <StandardButton
        title="Sign Out"
        onPress={handleSignOut}
      />
    </View>
  );
};

export default Profile;
