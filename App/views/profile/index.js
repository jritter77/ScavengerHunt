import { View, Text, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "./Profile";
import ChangeCredentials from "./ChangeCredentials";
import Settings from "./Settings";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";
import { Styles } from "../../Styles";
import StandardButton from "../../components/StandardButton";

const Stack = createNativeStackNavigator();

const ProfileStack = (props) => {
  return (
    <Stack.Navigator screenOptions={Styles.StackHeaderStyle}>
      <Stack.Screen name="Profile" children={() => <Profile {...props} />} />
      <Stack.Screen
        name="ChangeCredentials"
        children={() => <ChangeCredentials {...props} />}
      />
      <Stack.Screen name="Settings" children={() => <Settings {...props} />} />
      <Stack.Screen
        name="ChangePassword"
        children={() => <ChangePassword {...props} />}
      />
      <Stack.Screen
        name="ChangeUsername"
        children={() => <ChangeUsername {...props} />}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
