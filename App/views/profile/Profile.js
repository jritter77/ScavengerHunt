import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles, ThemeContext } from "../../Styles";

import { useNavigation } from "@react-navigation/native";
import { getData, removeData } from "../../Methods";
import StandardButtonWithIcon from "../../components/StandardButtonWithIcon";
import HuntHistory from "../../components/HuntHistory";
import { getUser } from "../../models/users";
import { ScrollView } from "react-native-gesture-handler";

// Profile View
const Profile = ({ navigation, setLoggedIn }) => {
  const theme = React.useContext(ThemeContext);
  const [username, setUsername] = React.useState("");
  const [huntHistory, setHuntHistory] = React.useState("");

  // Sign out handler
  const handleSignOut = async () => {
    await removeData("user");
    setLoggedIn(false);
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getData("user");
      const user = await getUser(currentUser.username);
      setUsername(user.username);
      setHuntHistory(user.huntHistory);
    };

    fetchUser();
  }, []);

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <HuntHistory username={username} huntHistory={huntHistory} />
      <StandardButtonWithIcon
        title="Change User Name"
        icon={require("../../assets/editIcon.png")}
        onPress={() => {
          navigation.navigate("ChangeUsername");
        }}
      />
      <StandardButtonWithIcon
        title="Change Password"
        icon={require("../../assets/editIcon.png")}
        onPress={() => {
          navigation.navigate("ChangePassword");
        }}
      />
      <StandardButtonWithIcon
        title="Settings"
        icon={require("../../assets/gearIcon.png")}
        onPress={() => navigation.navigate("Settings")}
      />
      <StandardButtonWithIcon
        title="Sign Out"
        icon={require("../../assets/backIcon.png")}
        onPress={handleSignOut}
      />
    </ScrollView>
  );
};

export default Profile;
