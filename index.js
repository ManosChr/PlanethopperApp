/**
 * @format
 */

import {AppRegistry, LogBox, Platform, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import App from './src/screens/App'
// import Home from './src/screens/home/Home'

StatusBar.setBarStyle('dark-content');
Platform.OS === 'android' && StatusBar.setBackgroundColor('#FFFFFF');
LogBox.ignoreAllLogs(); // Hide all warning notifications on front-end

AppRegistry.registerComponent(appName, () => App);
