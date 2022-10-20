import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddFriend from './AddFriend';
import FriendProfile from './FriendProfile';
import FriendRequests from './FriendRequests';
import Friends from './Friends';
import Styles from '../../Styles';



const Stack = createNativeStackNavigator();

const FriendStack = (props) => {
    return (
        <Stack.Navigator initialRouteName='Friends' screenOptions={Styles.StackHeaderStyle}>
          <Stack.Screen 
            name='AddFriend'
            children={() => <AddFriend {...props}/>}
          />
          <Stack.Screen 
            name='FriendProfile'
            children={() => <FriendProfile {...props}/>}
          />
          <Stack.Screen 
            name='FriendRequests'
            children={() => <FriendRequests {...props}/>}
          />
          <Stack.Screen 
            name='Friends'
            children={() => <Friends {...props}/>}
          />
        </Stack.Navigator>
    );
}

/* This is the local storage data for testing (Incomplete)
localStorage.setItem('storedFriends', JSON.stringify({[
  {}
]})
*/
export default FriendStack