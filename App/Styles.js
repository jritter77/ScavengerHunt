import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import HomeButton from "./components/HomeButton";
import { getData } from "./Methods";
import { getUserSettings } from "./models/users";

export const primaryColor = "#53ECFC";
export const secondaryColor = "#F283B3";
export const backgroundColor = "#FFFDD1";

export const themes = {
  default: {
    topGradient: "#53ECFC",
    bottomGradient: "#F283B3",
    backgroundColor: "#FFFDD1",
    textColor: "black",
    btnBgColor: "blue",
    btnTextColor: "white",
    btnBorderColor: "blue",
    inputBorderColor: "blue",
    inputTextColor: "black",
    inputBgColor: "white",
  },
  dark: {
    topGradient: "#383838",
    bottomGradient: "#383838",
    backgroundColor: "#383838",
    textColor: "white",
    btnBgColor: "#383838",
    btnTextColor: "white",
    btnBorderColor: "blue",
    inputBorderColor: "blue",
    inputTextColor: "white",
    inputBgColor: "#383838",
  },
};

export const Styles = {
  DrawerHeaderStyle: {
    headerTitleAlign: "center",
    headerTitle: "Lookout!",
    headerTintColor: "white",
    headerTitleStyle: { fontSize: 40, fontWeight: "bold" },
    headerRight: HomeButton,
    headerBackground: () => (
      <LinearGradient
        colors={[primaryColor, secondaryColor]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    ),
  },
  StackHeaderStyle: {
    headerTitleStyle: {
      color: "white",
    },
    headerStyle: {
      backgroundColor: backgroundColor,
    },
  },
  StandardStyles: StyleSheet.create({
    scrollContainer: {
      backgroundColor: backgroundColor,
    },
    scrollContainerContent: {
      alignItems: "center",
    },
    page: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: backgroundColor,
    },
    textInput: {
      width: "70%",
      fontSize: 20,
      padding: "5%",
      borderColor: "blue",
      borderWidth: 2,
      margin: "5%",
      backgroundColor: "white",
    },
  }),
};

export const ThemeStyles = (theme) => {
  return {
    ...theme,
    DrawerHeaderStyle: {
      headerTitleAlign: "center",
      headerTitle: "Lookout!",
      headerTintColor: "white",
      headerTitleStyle: { fontSize: 40, fontWeight: "bold" },
      headerRight: HomeButton,
      headerBackground: () => (
        <LinearGradient
          colors={[theme.topGradient, theme.bottomGradient]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      ),
    },
    StackHeaderStyle: {
      headerTintColor: "white",
      headerTitleStyle: {
        color: "white",
      },
      headerStyle: {
        backgroundColor: theme.backgroundColor,
      },
    },
    StandardStyles: StyleSheet.create({
      scrollContainer: {
        backgroundColor: theme.backgroundColor,
      },
      scrollContainerContent: {
        alignItems: "center",
      },
      page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.backgroundColor,
      },
      textInput: {
        width: "70%",
        fontSize: 20,
        padding: "5%",
        borderColor: theme.inputBorderColor,
        borderWidth: 2,
        margin: "5%",
        backgroundColor: theme.inputBgColor,
        color: theme.inputTextColor,
      },
    }),
  };
};

export const ThemeContext = React.createContext(ThemeStyles(themes.default));
