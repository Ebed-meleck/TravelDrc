
import React from 'react';
import MainStack from './src/Navigation/StackScreen';
import {
  NavigationContainer,
  DefaultTheme ,
  DarkTheme 
} from '@react-navigation/native'

import { AppearanceProvider, useColorScheme} from 'react-native-appearance';


export default function App() {

  const scheme = useColorScheme();

  return (
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
           <MainStack/>
        </NavigationContainer>
      </AppearanceProvider>
      
  );
}

