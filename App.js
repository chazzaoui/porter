/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import MyStack from './src/screens/components/navigation/stackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
