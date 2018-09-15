import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'#40404A'
  //  justifyContent: 'center',
  },
  textContainer:{
    margin:20,

  },
  back_sc:{
    backgroundColor: '#F24333',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lbl_quiz: {
    fontSize: 26,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  lbl_grammar: {
    fontSize: 20,
    color: 'black',
  },

  lbl_setence: {
    fontSize: 20,
    height:50,
    color: 'black',
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical:'center',
    margin:15
  },
  img_quiz_logo: {
    width:60,
    height:50,
    backgroundColor: 'transparent',
  },
  img_love_logo: {
    width:45,
    height:45,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'transparent',
    //resizeMode: 'contain'
  },
  txtbuttonstyle:{
    margin:20,
    backgroundColor:'white',
    color:'black',
  },
  buttonContainer: {
    margin: 20,
    height:1,
    backgroundColor:'white',
  },
  mbuttonStyle:{
    position: 'absolute',
    //height:50,
    margin:20,
    width:'92%',
    top:550,
    backgroundColor:'black',

  },
  bottomContainer: {
    margin: 20,
    height:80,
   // bottom: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  FlatListItemStyle:{
    padding:10,
    fontSize:18,
    height:44,
  },
  MainContainer :{
    
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:  20,
    
   },
    
   Alert_Main_View:{
    
     //alignItems: 'center',
     //justifyContent: 'center',
     backgroundColor : "#fff", 
     
     height: 200 ,
     width: '90%',
     borderWidth: 1,
     borderColor: '#fff',
     borderRadius:7,
    
   },
    
   Alert_Title:{
    
     fontSize: 25, 
     color: "#fff",
     flex:1,
     backgroundColor : "#f00", 
    // textAlign: 'left',
     padding: 10,
     height: '28%'
    
   },
   
   Alert_Message:{
    
       fontSize: 22, 
       color: "#000",
       //textAlign: 'center',
       padding: 10,
       height: '42%'
      
     },
   
   buttonStyle: {
       
       width: '50%',
       height: '100%',
       justifyContent: 'center',
       alignItems: 'center'
   
   },
      
   TextStyle:{
       color:'#00f',
       textAlign:'center',
       fontSize: 22,
       marginTop: -5
   }
});
export default styles;