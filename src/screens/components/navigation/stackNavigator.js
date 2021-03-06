import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from '../../detailScreen';
import HomeScreen from '../../homescreen/homeScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
