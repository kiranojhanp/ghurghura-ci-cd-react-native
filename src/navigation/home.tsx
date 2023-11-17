import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {TABS} from '../common/constants';
import Home from '../screens/Home';
import Placeholder from '../screens/Placeholder';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === TABS.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === TABS.FEED) {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === TABS.NOTIFICATIONS) {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name={TABS.HOME} component={Home} />
      <Tab.Screen name={TABS.FEED} component={Placeholder} />
      <Tab.Screen name={TABS.NOTIFICATIONS} component={Placeholder} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
