/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View,Image,TextInput,Button,Alert} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import WelcomePage from './src/welcome/WelcomePage';
import GrammarPage from './src/grammar/GrammarPage';

const App = createStackNavigator({  
  Grammar: { screen: GrammarPage },

  Welcome: { screen: WelcomePage },
  //Profile: { screen: ProfileScreen },
});
export default class Apps extends React.Component {
	render() {
    const firstAction = App.router.getActionForPathAndParams('Welcome');
    App.router.getStateForAction(firstAction);
		return <App />;
	}
}