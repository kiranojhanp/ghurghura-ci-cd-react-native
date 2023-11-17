import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const SCREENS = {
  HOME: 'HomeScreen',
  PROFILE: 'ProfileScreen',
  SETTINGS: 'SettingsScreen',
} as const;

const TABS = {
  HOME: 'Home',
  FEED: 'Feed',
  NOTIFICATIONS: 'Notifications',
} as const;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function EmptyScreen() {
  return <View />;
}

function Home({navigation}: any) {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate(SCREENS.PROFILE)}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate(SCREENS.SETTINGS)}
      />
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TABS.HOME} component={Home} />
      <Tab.Screen name={TABS.FEED} component={EmptyScreen} />
      <Tab.Screen name={TABS.NOTIFICATIONS} component={EmptyScreen} />
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
        <Stack.Screen name={SCREENS.PROFILE} component={EmptyScreen} />
        <Stack.Screen name={SCREENS.SETTINGS} component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
