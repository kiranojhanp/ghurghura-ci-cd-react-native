import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SCREENS} from '../common/constants';
import Placeholder from '../screens/Placeholder';
import home from './home';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
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
