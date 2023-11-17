import React from 'react';
import Analytics from 'appcenter-analytics';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home(): JSX.Element {
   const navigation = useNavigation();

  const handleEvent = async () => {
    Analytics.trackEvent('make_payment', {Internet: 'Cellular', GPS: 'on'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.hello}>Hello, World</Text>
      <Button onPress={handleEvent} title="Crash" />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
}

function Details() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function Wrapper(): JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: "Overview" }} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
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
    color: 'green',
    textAlign: 'center',
    margin: 10,
  },
});

export default Wrapper;
