import React,{useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen.js';
import SignupScreen from '../screens/SignupScreen.js';
import firestore from '@react-native-firebase/firestore';

const Stack = createStackNavigator();

const AppStack = ({navigation,us}) => {
  const email = us.email;
  useEffect(()=>{
    getDatabase()
  },[]);

  const getDatabase = async()=>{
    try{

      const data = await firestore().collection('users').doc(email).update({
        status:true,
      });

    }
    catch(e)
    {
      console.log(e);
    }
  }
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>


      <Stack.Screen name="Profile" children={() => <ProfileScreen Email={email} />}/>
    </Stack.Navigator>
  );
}

export default AppStack;
