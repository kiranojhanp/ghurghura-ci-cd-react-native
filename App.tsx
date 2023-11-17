import React from 'react';
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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>Hello, World</Text>
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

function Details({route}: DetailsProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hello}>{route.params.otherParam}</Text>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function Wrapper(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
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
    color: 'tomato',
    textAlign: 'center',
    margin: 10,
  },
});

export default Wrapper;
