import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActiveHunt from './views/ActiveHunt';
import AddFriend from './views/AddFriend';
import ChangeCredentials from './views/ChangeCredentials';
import Dashboard from './views/Dashboard';
import CreateHunt from './views/CreateHunt';
import FindHunts from './views/FindHunts';
import Friends from './views/Friends';
import FriendRequests from './views/FriendRequests';
import FriendProfile from './views/FriendProfile';
import HuntInfo from './views/HuntInfo';
import Login from './views/Login';
import Profile from './views/Profile';
import Settings from './views/Settings';
import SignUp from './views/SignUp';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
          name="ActiveHunt"
          component={ActiveHunt}
        />
        <Stack.Screen 
          name="AddFriend"
          component={AddFriend}
        />
        <Stack.Screen 
          name="ChangeCredentials"
          component={ChangeCredentials}
        />
        <Stack.Screen 
          name="CreateHunt"
          component={CreateHunt}
        />
        <Stack.Screen 
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen 
          name="FindHunts"
          component={FindHunts}
        />
        <Stack.Screen 
          name="FriendProfile"
          component={FriendProfile}
        />
        <Stack.Screen 
          name="FriendRequests"
          component={FriendRequests}
        />
        <Stack.Screen 
          name="Friends"
          component={Friends}
        />
        <Stack.Screen 
          name="HuntInfo"
          component={HuntInfo}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen 
          name="Settings"
          component={Settings}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
