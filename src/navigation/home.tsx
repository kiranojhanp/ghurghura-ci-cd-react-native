import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TABS} from '../common/constants';
import Home from '../screens/Home';
import Placeholder from '../screens/Placeholder';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TABS.HOME} component={Home} />
      <Tab.Screen name={TABS.FEED} component={Placeholder} />
      <Tab.Screen name={TABS.NOTIFICATIONS} component={Placeholder} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
