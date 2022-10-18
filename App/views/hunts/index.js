import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActiveHunt from './ActiveHunt';
import CreateHunt from './CreateHunt';
import FindHunts from './FindHunts';
import LocalHuntInfo from './LocalHuntInfo';
import Hunts from './Hunts';
import MyHunts from './MyHunts';
import Styles from '../../Styles';
import StoredHuntInfo from './StoredHuntInfo';



const Stack = createNativeStackNavigator();

localStorage.setItem('hunts', JSON.stringify([
  {_id: 1, title: 'Hunt 1', description: 'This is a test hunt!'},
  {_id: 2, title: 'Hunt 2', description: 'This is a test hunt!'},
  {_id: 3, title: 'Hunt 3', description: 'This is a test hunt!'},
  {_id: 4, title: 'Hunt 4', description: 'This is a test hunt!'},
]))

localStorage.setItem('storedHunts', JSON.stringify([
  {_id: 1, rating: 3.5, title: 'Hunt 1', description: 'This is a test hunt!'},
  {_id: 2, rating: 2.5, title: 'Hunt 2', description: 'This is a test hunt!'},
  {_id: 3, rating: 4.5, title: 'Hunt 3', description: 'This is a test hunt!'},
  {_id: 4, rating: 1.5, title: 'Hunt 4', description: 'This is a test hunt!'},
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
            name='LocalHuntInfo'
            children={() => <LocalHuntInfo {...props}/>}
          />
          <Stack.Screen 
            name='StoredHuntInfo'
            children={() => <StoredHuntInfo {...props}/>}
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