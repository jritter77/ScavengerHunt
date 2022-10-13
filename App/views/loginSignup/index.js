import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import SignUp from './SignUp';



const Stack = createNativeStackNavigator();

const LoginStack = (props) => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name='Login'
            children={() => <Login {...props}/>}
          />
          <Stack.Screen 
            name='SignUp'
            children={() => <SignUp {...props}/>}
          />
        </Stack.Navigator>
    );
}

export default LoginStack