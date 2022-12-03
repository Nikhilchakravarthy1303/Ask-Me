import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './tabs.js';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = ({navigation,Email}) => {
  const email = Email;
  return (
    <NavigationContainer independent={true}>
      <Tabs Email={email}/>
    </NavigationContainer>
  );
}

export default ProfileScreen;
