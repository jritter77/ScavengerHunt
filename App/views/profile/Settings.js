import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import ThemeButton from "../../components/ThemeButton";
import { CustomAlert, setData } from "../../Methods";
import { setUserHunts } from "../../models/hunts";

// Settings View
const Settings = ({ navigation, setTheme }) => {
  const theme = React.useContext(ThemeContext);

  // Clear User Data Handler
  const clearUserData = async () => {
    const result = await setUserHunts({});
  };

  return (
    <View style={theme.StandardStyles.page}>
      <Text style={{ ...styles.text, color: theme.textColor }}>Themes</Text>
      <View style={styles.themes}>
        <ThemeButton theme="default" setTheme={setTheme} />
        <ThemeButton theme="dark" setTheme={setTheme} />
      </View>
      <Text style={{ ...styles.text, color: theme.textColor }}>Data</Text>
      <StandardButton
        title="Delete Local Data"
        onPress={() =>
          CustomAlert(
            "Delete Local Data",
            "Are you sure you would like to delete this user's local data?",
            clearUserData
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    width: "70%",
    fontSize: 20,
    fontWeight: "bold",
  },
  themes: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    margin: "10%",
  },
});

export default Settings;
