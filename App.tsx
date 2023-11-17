import React from 'react';
import Analytics from 'appcenter-analytics';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  const handleEvent = async () => {
    Analytics.trackEvent('make_payment', {Internet: 'Cellular', GPS: 'on'});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.hello}>Hello, World</Text>
      <Button onPress={handleEvent} title="Crash" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
