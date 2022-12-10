import { View, Text, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "./Profile";
import Settings from "./Settings";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

// Profile Stack Navigator
const ProfileStack = (props) => {
  const navigation = useNavigation();
  const theme = React.useContext(ThemeContext);
  return (
    <Stack.Navigator screenOptions={theme.StackHeaderStyle}>
      <Stack.Screen
        name="Profile"
        children={() => <Profile navigation={navigation} {...props} />}
      />
      <Stack.Screen
        name="Settings"
        children={() => <Settings navigation={navigation} {...props} />}
      />
      <Stack.Screen
        name="ChangePassword"
        children={() => <ChangePassword navigation={navigation} {...props} />}
      />
      <Stack.Screen
        name="ChangeUsername"
        children={() => <ChangeUsername navigation={navigation} {...props} />}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
