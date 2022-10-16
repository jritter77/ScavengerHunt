import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import React from 'react';


import Dashboard from './views/dashboard/Dashboard';


import ProfileStack from './views/profile';
import HuntStack from './views/hunts';
import FriendStack from './views/friends';
import LoginStack from './views/loginSignup';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles';



const Drawer = createDrawerNavigator();



export default function App() {

  const [userId, setUserId] = React.useState('');

  const [loggedIn, setLoggedIn] = React.useState(false);




  if (loggedIn) {
    console.log(userId);
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Dashboard' screenOptions={Styles.DrawerHeaderStyle} >
            <Drawer.Screen 
              name='Dashboard'
              component={Dashboard}
            />
            <Drawer.Screen 
              name='ProfileStack'
              component={ProfileStack}
              options={{drawerLabel: 'Profile'}}
            />
            <Drawer.Screen 
              name='HuntStack'
              component={HuntStack}
              options={{drawerLabel: 'Scavenger Hunts'}}
            />
            <Drawer.Screen 
              name='FriendStack'
              component={FriendStack}
              options={{drawerLabel: 'Friends'}}
            />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
        <LoginStack setLoggedIn={setLoggedIn} setUserId={setUserId}/>
    )
  }
  
}


