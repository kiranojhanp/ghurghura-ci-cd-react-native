import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {UnistylesTheme} from 'react-native-unistyles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from './common/theme';
import {createStyleSheet, useStyles} from './common/styles';

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
  const {styles} = useStyles(stylesheet);
  return (
    <View style={styles.container}>
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

function Root() {
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

function App() {
  <UnistylesTheme theme={theme}>
    <Root />
  </UnistylesTheme>;
}

export default App;

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.pumpkin,
  },
}));
