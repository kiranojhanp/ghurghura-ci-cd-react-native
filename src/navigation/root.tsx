import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from '../common/constants';
import Placeholder from '../screens/Placeholder';
import home from './home';
import {useColorScheme} from 'react-native';

const LightMode = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const DarkMode = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const Stack = createNativeStackNavigator();

const Root = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightMode}>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.HOME}
          component={home}
          options={{headerShown: false}}
        />
        <Stack.Screen name={SCREENS.PROFILE} component={Placeholder} />
        <Stack.Screen name={SCREENS.SETTINGS} component={Placeholder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
