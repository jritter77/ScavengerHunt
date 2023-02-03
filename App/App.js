import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import React, { useContext } from "react";

import Dashboard from "./views/dashboard/Dashboard";

import ProfileStack from "./views/profile";
import HuntStack from "./views/hunts";
import FriendStack from "./views/friends";
import LoginStack from "./views/loginSignup";
import { LinearGradient } from "expo-linear-gradient";
import { getData, setData } from "./Methods";
import { Styles, ThemeStyles, themes, ThemeContext } from "./Styles";
import { getUser, getUserSettings, userExists } from "./models/users";
import MainStack from "./views/MainStack";

// Main App
export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [theme, setTheme] = React.useState(ThemeStyles(themes.default));

  // Effect hook to detect user token
  React.useEffect(() => {
    const checkToken = async () => {
      const user = await getData("user");
      if (user && user.token) {
        if (await userExists(user.username)) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } else {
        setLoggedIn(false);
      }
    };

    checkToken();
  }, []);

  if (loggedIn) {
    return (
      <ThemeContext.Provider value={theme}>
        <MainStack setLoggedIn={setLoggedIn} setTheme={setTheme} />
      </ThemeContext.Provider>
    );
  } else {
    return (
      <ThemeContext.Provider value={theme}>
        <LoginStack setLoggedIn={setLoggedIn} />
      </ThemeContext.Provider>
    );
  }
}
