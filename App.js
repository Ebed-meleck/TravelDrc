import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/screens/HomeScreen';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='onBoardScreen' component={OnBoardScreen}  />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}  />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

