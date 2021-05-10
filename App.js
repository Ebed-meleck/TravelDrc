
import React, {
  useContext,
  useState,
  useMemo
} from 'react';
import MainStack from './src/Navigation/StackScreen';
import {
  NavigationContainer,
  DefaultTheme ,
  DarkTheme 
} from '@react-navigation/native'
/*import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  DarkTheme
} from 'react-native-paper'*/
import { AuthContext } from './src/components/context';
import COLORS from './src/consts/colors';
import { AppearanceProvider, useColorScheme} from 'react-native-appearance';


export default function App() {

  //const [isDarkTheme, setIsDarkTheme] = useState(false);

  /*const CustomDefaultTheme = {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    colors: {
      ...NavigationDefaultTheme.Colors,
      ...PaperDefaultTheme.colors,
      background: COLORS.white,
      text: COLORS.secondary
    }
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme.colos,
    ...PaperDarkTheme.colors,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: COLORS.secondary,
      text: COLORS.white
    }
  };

  const authContext = useMemo(() => ({
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), [])

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;*/
  const scheme = useColorScheme();

  return (
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
           <MainStack/>
        </NavigationContainer>
      </AppearanceProvider>
      
  );
}

