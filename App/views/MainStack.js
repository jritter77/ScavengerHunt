import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ThemeContext } from '../Styles';
import Dashboard from './dashboard/Dashboard';
import ProfileStack from './profile';
import HuntStack from './hunts';
import FriendStack from './friends';


const Drawer = createDrawerNavigator();


const MainStack = ({setLoggedIn}) => {

    const theme = React.useContext(ThemeContext);

  return (
    <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Dashboard"
            screenOptions={theme.DrawerHeaderStyle}
          >
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen
              name="ProfileStack"
              children={() => <ProfileStack setLoggedIn={setLoggedIn} />}
              options={{ drawerLabel: "Profile" }}
            />
            <Drawer.Screen
              name="HuntStack"
              component={HuntStack}
              options={{ drawerLabel: "Scavenger Hunts" }}
            />
            <Drawer.Screen
              name="FriendStack"
              component={FriendStack}
              options={{ drawerLabel: "Friends" }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
  )
}

export default MainStack

const styles = StyleSheet.create({})