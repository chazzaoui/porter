import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../homescreen/homeScreen';
import Upload from '../../upload';
import Profile from '../../profile';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MyTab;
