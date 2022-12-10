import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddFriend from "./AddFriend";
import FriendProfile from "./FriendProfile";
import FriendRequests from "./FriendRequests";
import Friends from "./Friends";
import { Styles, ThemeContext } from "../../Styles";
import FriendHeaderButtons from "../../components/FriendHeaderButtons";
const Stack = createNativeStackNavigator();

// Friend Navigator Stack
const FriendStack = (props) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Friends"
      screenOptions={theme.StackHeaderStyle}
    >
      <Stack.Screen
        name="AddFriend"
        options={{ headerTitle: "Add Friend" }}
        children={() => <AddFriend {...props} />}
      />
      <Stack.Screen
        name="FriendProfile"
        options={{ headerTitle: "Friend Profile" }}
        children={() => <FriendProfile {...props} />}
      />
      <Stack.Screen
        name="FriendRequests"
        options={{ headerTitle: "Friend Requests" }}
        children={() => <FriendRequests {...props} />}
      />
      <Stack.Screen
        name="Friends"
        children={() => <Friends {...props} />}
        options={{
          headerRight: () => <FriendHeaderButtons {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default FriendStack;
