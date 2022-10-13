import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import ActiveHunt from './views/hunts/ActiveHunt';
import AddFriend from './views/friends/AddFriend';
import ChangeCredentials from './views/profile/ChangeCredentials';
import Dashboard from './views/dashboard/Dashboard';
import CreateHunt from './views/hunts/CreateHunt';
import FindHunts from './views/hunts/FindHunts';
import Friends from './views/friends/Friends';
import FriendRequests from './views/friends/FriendRequests';
import FriendProfile from './views/friends/FriendProfile';
import HuntInfo from './views/hunts/HuntInfo';
import Hunts from './views/hunts/Hunts';
import Login from './views/loginSignup/Login';
import Profile from './views/profile/Profile';
import Settings from './views/profile/Settings';
import SignUp from './views/loginSignup/SignUp';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {

const [loggedIn, setLoggedIn] = React.useState(false);


function ProfileStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name='Profile'
          component={Profile}
        />
        <Stack.Screen 
          name='ChangeCredentials'
          component={ChangeCredentials}
        />
        <Stack.Screen 
          name='Settings'
          component={Settings}
        />
      </Stack.Navigator>
  );
}

  if (loggedIn) {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Dashboard' >
          <Drawer.Group screenOptions={{headerTitle: 'Lookout!'}}>
            <Drawer.Screen 
              name='ProfileStack'
              component={ProfileStack}
              options={{drawerLabel: 'Profile'}}
            />
            <Drawer.Screen 
              name='Dashboard'
              component={Dashboard}
            />
            <Drawer.Screen 
              name='Hunts'
              component={Hunts}
              options={{drawerLabel: 'Scavenger Hunts'}}
            />
            <Drawer.Screen 
              name='Friends'
              component={Friends}
            />
          </Drawer.Group>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <Login setLoggedIn={setLoggedIn} />
    )
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
