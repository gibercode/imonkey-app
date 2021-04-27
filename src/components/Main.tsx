import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Detail } from '../views';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="main">
    <Stack.Screen name='main' component={Main}/>
    <Stack.Screen name='detail' component={Detail}/>
  </Stack.Navigator>
);

export default AuthNavigator;
