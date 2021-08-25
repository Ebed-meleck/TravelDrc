
import React from 'react';
import MainStack from './src/Navigation/StackScreen';
import {
  NavigationContainer,
  DefaultTheme ,
  DarkTheme 
} from '@react-navigation/native'

import { AppearanceProvider, useColorScheme} from 'react-native-appearance';
import store from "./src/store/store";
import { Provider } from 'react-redux';


export default function App() {

  const scheme = useColorScheme();

  return (
    <Provider store={store} > 
        <AppearanceProvider>
          <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
            <MainStack/>
          </NavigationContainer>
        </AppearanceProvider>
      </Provider>
  );
}

