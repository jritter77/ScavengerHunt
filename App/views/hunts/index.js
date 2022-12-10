import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ActiveHunt from "./ActiveHunt";
import CreateHunt from "./CreateHunt";
import FindHunts from "./FindHunts";
import LocalHuntInfo from "./LocalHuntInfo";
import Hunts from "./Hunts";
import MyHunts from "./MyHunts";
import { Styles, ThemeContext } from "../../Styles";
import StoredHuntInfo from "./StoredHuntInfo";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { setData } from "../../Methods";
import RateHunt from "./RateHunt";

const Stack = createNativeStackNavigator();

// Hunt Stack Navigator
const HuntStack = (props) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Hunts"
      screenOptions={theme.StackHeaderStyle}
    >
      <Stack.Screen
        name="ActiveHunt"
        options={{ headerTitle: "Active Hunt" }}
        children={() => <ActiveHunt {...props} />}
      />
      <Stack.Screen
        name="CreateHunt"
        options={{ headerTitle: "Create A New Hunt" }}
        children={() => <CreateHunt {...props} />}
      />
      <Stack.Screen
        name="FindHunts"
        options={{ headerTitle: "Find New Hunts" }}
        children={() => <FindHunts {...props} />}
      />
      <Stack.Screen
        name="RateHunt"
        options={{ headerTitle: "Rate Hunt" }}
        children={() => <RateHunt {...props} />}
      />
      <Stack.Screen
        name="LocalHuntInfo"
        options={{ headerTitle: "Hunt Information" }}
        children={() => <LocalHuntInfo {...props} />}
      />
      <Stack.Screen
        name="StoredHuntInfo"
        options={{ headerTitle: "Hunt Information" }}
        children={() => <StoredHuntInfo {...props} />}
      />
      <Stack.Screen name="Hunts" children={() => <Hunts {...props} />} />
      <Stack.Screen
        name="MyHunts"
        options={{ headerTitle: "My Hunts" }}
        children={() => <MyHunts {...props} />}
      />
    </Stack.Navigator>
  );
};

export default HuntStack;
