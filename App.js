
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import OneSignal from 'react-native-onesignal';


export default class App extends Component {
  constructor(properties) {
    super(properties);
    OneSignal.init("1f4494e7-504f-40b6-9cac-a868a41c557b");
  
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

componentWillUnmount() {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
}

onReceived(notification) {
  console.log("Notification received: ", notification);
}

onOpened(openResult) {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
}

onIds(device) {
  console.log('Device info: ', device);
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
