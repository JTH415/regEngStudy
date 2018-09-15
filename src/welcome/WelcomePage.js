import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button,Alert} from 'react-native';
//var {bp, vw, vh} = require('react-native-relative-units')(100);
import {
  createStackNavigator,
} from 'react-navigation';
import styles from './style.js';

 class WelcomePage extends React.Component {
  static navigationOptions = {
    title: null,
    header:null,
  };
  
  render() {
    //const {navigate} = this.props.navigation;
    return (
            
      <View style={styles.container}>
          <View style={styles.back_sc}>
          <TouchableOpacity  activeOpacity={0.5}  onPress={() => this.props.navigation.navigate('Grammar')}>
          <Image source={require('../../asserts/images/ic_action_previous_item.png')}
                style={styles.img_quiz_logo} >
          </Image>
          
          </TouchableOpacity>
          <Text style={styles.lbl_quiz}>  Quiz Prompt</Text>
          </View>
          <View style={{
                justifyContent: 'center',
                alignItems: 'center',margin:18
              }}>
        <Image source={require('../../asserts/images/light.png')}
                style={styles.img_top_logo}>
        </Image>
        </View>
        <View style={styles.textContainer}>
           <Text style={styles.lbl_login}>Welcome,Test your skill on English Grammar!!!</Text>
           <Text style={styles.lbl_login}>Are you Ready?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            //onPress={this._onPressButton}
          onPress={() => this.props.navigation.navigate('Grammar')}
            title="Yes"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
          onPress={() => this.props.navigation.navigate('Grammar')}
          title="No"
            color="#F24333"
          />
        </View>
     
      </View>
    );
}
}

export default WelcomePage;