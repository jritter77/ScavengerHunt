import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ActiveHunt from "./ActiveHunt";
import CreateHunt from "./CreateHunt";
import FindHunts from "./FindHunts";
import LocalHuntInfo from "./LocalHuntInfo";
import Hunts from "./Hunts";
import MyHunts from "./MyHunts";
import { Styles } from "../../Styles";
import StoredHuntInfo from "./StoredHuntInfo";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { setData } from "../../Methods";

const Stack = createNativeStackNavigator();

const HuntStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Hunts"
      screenOptions={Styles.StackHeaderStyle}
    >
      <Stack.Screen
        name="ActiveHunt"
        children={() => <ActiveHunt {...props} />}
      />
      <Stack.Screen
        name="CreateHunt"
        children={() => <CreateHunt {...props} />}
      />
      <Stack.Screen
        name="FindHunts"
        children={() => <FindHunts {...props} />}
      />
      <Stack.Screen
        name="LocalHuntInfo"
        children={() => <LocalHuntInfo {...props} />}
      />
      <Stack.Screen
        name="StoredHuntInfo"
        children={() => <StoredHuntInfo {...props} />}
      />
      <Stack.Screen name="Hunts" children={() => <Hunts {...props} />} />
      <Stack.Screen name="MyHunts" children={() => <MyHunts {...props} />} />
    </Stack.Navigator>
  );
};

export default HuntStack;
