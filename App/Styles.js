import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import HomeButton from "./components/HomeButton";

export const primaryColor = "#53ECFC";
export const secondaryColor = "#F283B3";
export const backgroundColor = "#FFFDD1";

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
