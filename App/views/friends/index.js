import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddFriend from "./AddFriend";
import FriendProfile from "./FriendProfile";
import FriendRequests from "./FriendRequests";
import Friends from "./Friends";
import { Styles, ThemeContext } from "../../Styles";
import FriendHeaderButtons from "../../components/FriendHeaderButtons";
const Stack = createNativeStackNavigator();

const FriendStack = (props) => {
  const theme = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Friends"
      screenOptions={theme.StackHeaderStyle}
    >
      <Stack.Screen
        name="AddFriend"
        options={{headerTitle: '', headerTransparent: true}}
        children={() => <AddFriend {...props} />}
      />
      <Stack.Screen
        name="FriendProfile"
        options = {{headerTitle: '', headerTransparent: true}}
        children={() => <FriendProfile {...props} />}
      />
      <Stack.Screen
        name="FriendRequests"
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
