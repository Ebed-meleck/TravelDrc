import * as React from 'react';
import HomeScreen from '../views/screens/HomeScreen';
import OnBoardScreen from '../views/screens/OnBoardScreen';
import DetailsScreen from '../views/screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import MainDrawer from './Drawer';

  
const Stack = createStackNavigator();


const MainStack = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='onBoardScreen' >
        <Stack.Screen name='onBoardScreen' component={OnBoardScreen} />
        <Stack.Screen name='start'
          component={MainDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStack;