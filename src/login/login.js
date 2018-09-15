import React, {Component} from 'react';
var React = require('react-native');
var {
		StyleSheet,
		View,
		Image,
		Text,
		Button,
		TextInput,
		Alert
} = React;
//var {bp, vw, vh} = require('react-native-relative-units')(100);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var Welcome = React.createClass({


  _onPressButton() {
    //Alert.alert('You tapped the button!')
    this.props.navigator.push({id: 'login'});
  }

  render() {
    return (      
      <View style={styles.container}>
          <View style={styles.back_sc}>
          <Image source={require('./asserts/images/ic_action_previous_item.png')}
                style={styles.img_quiz_logo}>
          </Image>
          <Text style={styles.lbl_quiz}>  Quiz Prompt</Text>
          </View>
          <View style={{
                justifyContent: 'center',
                alignItems: 'center',margin:18
              }}>
        <Image source={require('./asserts/images/light.png')}
                style={styles.img_top_logo}>
        </Image>
        </View>
        <View style={styles.textContainer}>
           <Text style={styles.lbl_login}>Welcome,Test your skill on English Grammar!!!</Text>
           <Text style={styles.lbl_login}>Are you Ready?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Yes"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="No"
            color="#F24333"
          />
        </View>
     
      </View>
    );
})
module.exports =WelcomePage;









// var React = require('react-native');
// var WelcomePage = require('./modules/welcome/WelcomePage');
// var { StyleSheet, View, Image, Text, TextInput, Navigator, TouchableOpacity } = React;
// export default class reactEngStudy extends React.Component{
//   _renderScence(route,nav){
//     switch(route.id)
//     {
//       case 'welcome':
//         return <WelcomePage navigator={nav} />;
//       default:
//         return (
//           <View/>
//         );
//     }
//   }
//   _setNavigatorRef(navigator){
//     if(navigator!=this._navigator){
//         this._navigator=navigator;
//     }
//   }
//   render(){
//     return(
//       <Navigator
//         ref={this._setNavigatorRef}
//         style={{flex:1,}}
//         initialRoute={{id:'welcome'}}
//         _renderScence={this._renderScence}
//         configureScene={(route)=>{
//           if(route.sceneConfig){
//             return route.sceneConfig;
//           }
//           return Navigator.sceneConfig.FloatFromBottom;
//         }
//         }
//         />
//     );
//   }
// }