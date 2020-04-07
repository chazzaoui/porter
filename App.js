/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {enableScreens} from 'react-native-screens';

enableScreens();

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './src/screens/components/navigation/stackNavigator';
import MyTab from './src/screens/components/navigation/tabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
};

export default App;
