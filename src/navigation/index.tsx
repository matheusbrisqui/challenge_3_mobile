import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Education from '../screens/Education';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Portfolio" component={Portfolio} />
      <Stack.Screen name="Education" component={Education} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
