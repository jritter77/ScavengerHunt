import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActiveHunt from './ActiveHunt';
import CreateHunt from './CreateHunt';
import FindHunts from './FindHunts';
import HuntInfo from './HuntInfo';
import Hunts from './Hunts';
import MyHunts from './MyHunts';



const Stack = createNativeStackNavigator();

const HuntStack = (props) => {
    return (
        <Stack.Navigator initialRouteName='Hunts'>
          <Stack.Screen 
            name='ActiveHunt'
            children={() => <ActiveHunt {...props}/>}
          />
          <Stack.Screen 
            name='CreateHunt'
            children={() => <CreateHunt {...props}/>}
          />
          <Stack.Screen 
            name='FindHunts'
            children={() => <FindHunts {...props}/>}
          />
          <Stack.Screen 
            name='HuntInfo'
            children={() => <HuntInfo {...props}/>}
          />
          <Stack.Screen 
            name='Hunts'
            children={() => <Hunts {...props}/>}
          />
          <Stack.Screen 
            name='MyHunts'
            children={() => <MyHunts {...props}/>}
          />
        </Stack.Navigator>
    );
}

export default HuntStack