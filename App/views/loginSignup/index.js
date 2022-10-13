import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import SignUp from './SignUp';
import { NavigationContainer} from '@react-navigation/native';



const Stack = createNativeStackNavigator();

const LoginStack = (props) => {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Login'
            children={() => <Login {...props} />}
          />
          <Stack.Screen 
            name='SignUp'
            children={() => <SignUp {...props} />}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default LoginStack