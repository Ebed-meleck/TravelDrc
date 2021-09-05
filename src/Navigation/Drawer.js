import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../components/DrawerContent'
import HomeScreen from '../views/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../views/screens/DetailsScreen';
import FavorisList from '../views/screens/FavorisList';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='home'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={HomeScreen} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
      <Stack.Screen name='FavorisList' component={FavorisList}/>
    </Stack.Navigator>
  );

}

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
      <Drawer.Navigator
        initialRouteName='home'
        drawerContent={props=> <DrawerContent {...props} />}>
        <Drawer.Screen name='home' component={HomeStack} />
        {/*<Drawer.Screen name='favoris' component={FavorisList} /> */}
      </Drawer.Navigator>  
  );
}

export default MainDrawer;