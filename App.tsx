import React from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: {
    itemId: number;
    otherParam?: string;
  };
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function Home({navigation}: HomeProps): JSX.Element {
  const test = {itemId: 85};
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>Hello, World</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', test)}
      />
    </SafeAreaView>
  );
}

function Details({route}: DetailsProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>
        {route.params.otherParam ?? 'Details page'}
      </Text>
    </SafeAreaView>
  );
}

function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>Settings!</Text>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function Wrapper(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    color: 'tomato',
    textAlign: 'center',
    margin: 10,
  },
});

export default Wrapper;
