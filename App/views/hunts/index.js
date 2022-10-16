import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActiveHunt from './ActiveHunt';
import CreateHunt from './CreateHunt';
import FindHunts from './FindHunts';
import HuntInfo from './HuntInfo';
import Hunts from './Hunts';
import MyHunts from './MyHunts';
import Styles from '../../Styles';



const Stack = createNativeStackNavigator();

localStorage.setItem('hunts', JSON.stringify([
  {_id: 1, title: 'Hunt 1', description: 'This is a test hunt!'},
  {_id: 2, title: 'Hunt 2', description: 'This is a test hunt!'},
  {_id: 3, title: 'Hunt 3', description: 'This is a test hunt!'},
  {_id: 4, title: 'Hunt 4', description: 'This is a test hunt!'},
]))


const HuntStack = (props) => {

    return (
        <Stack.Navigator initialRouteName='Hunts' screenOptions={Styles.StackHeaderStyle}>
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