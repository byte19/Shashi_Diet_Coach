/**
 * @format
 */
import firebase from '@react-native-firebase/app';
import {AppRegistry} from 'react-native';
import App from './src/Router';
import {name as appName} from './app.json';

if (!firebase.apps.length) {
    firebase.initializeApp();
    // Optionally, pass your Firebase config object to initializeApp() here
  }

AppRegistry.registerComponent(appName, () => App);
