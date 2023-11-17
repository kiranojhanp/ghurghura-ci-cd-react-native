import React from 'react';
import Analytics from 'appcenter-analytics';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
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
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 85,
          })
        }
      />
    </SafeAreaView>
  );
}

function Details({navigation, route}: DetailsProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>{route.params.otherParam}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: 86,
            otherParam: 'lorem ipsum',
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function Wrapper(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{otherParam: 'Kiran ojha'}}
        />
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
