import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Placeholder from './screens/Placeholder';
import {SCREENS, TABS} from './common/constants';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TABS.HOME} component={Home} />
      <Tab.Screen name={TABS.FEED} component={Placeholder} />
      <Tab.Screen name={TABS.NOTIFICATIONS} component={Placeholder} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.HOME}
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name={SCREENS.PROFILE} component={Placeholder} />
        <Stack.Screen name={SCREENS.SETTINGS} component={Placeholder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
