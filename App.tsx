import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Main } from './src/components';
import { store } from './src/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
    </>
  );
}


