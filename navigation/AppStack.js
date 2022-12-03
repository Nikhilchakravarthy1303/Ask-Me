import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen.js';
import SignupScreen from '../screens/SignupScreen.js';
const Stack = createStackNavigator();

const AppStack = ({navigation,us}) => {
  const email = us.email
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>

      
      <Stack.Screen name="Profile" children={() => <ProfileScreen Email={email} />}/>
    </Stack.Navigator>
  );
}

export default AppStack;
