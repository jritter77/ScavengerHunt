import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import SignUp from "./SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../Styles";

const Stack = createNativeStackNavigator();

// Login Stack Navigator
const LoginStack = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ ...Styles.DrawerHeaderStyle, headerRight: null }}
      >
        <Stack.Screen name="Login" children={() => <Login {...props} />} />
        <Stack.Screen name="SignUp" children={() => <SignUp {...props} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
