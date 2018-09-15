import React, {Component} from 'react';
import {AppRegistry,Platform, FlatList,AcitivityIndicator,StyleSheet, ActivityIndicator,Text, View,Image,TextInput,Button,TouchableOpacity,Alert,Modal} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import styles from './style.js';
const nCnt = 5;
const nwCnt = 4;
 class GrammarPage extends React.Component {
  static navigationOptions = {
    title: null,
    header:null,
  };
  constructor(props) {
 
    super(props);
 
    this.state = {         
        Alert_Visibility: false ,
        isLoading: true,
    };
 
  }
  componentDidMount(){
    return fetch('http://192.168.1.86/lesson_01.json')
    .then((response)=>response.json())
    .then((responseJson)=>{this.setState({
      isLoading:false,
      data:responseJson
    },function(){           
      
    });
    })
    .catch((error)=>{console.error(error);
    });
  }
 FloatListItemSeparator = ()=>{
   return(
     <View
      style={{height:1,width:"100%",backgroundColor:"#607D8B",}}
      />
   );
 }
 GetFlatListItem(fruist_name){
   Alert.alert(fruist_name);
 }
  Show_Custom_Alert(visible) {
 
    this.setState({Alert_Visibility: visible});
    
  }

  ok_Button=()=>{

    Alert.alert("OK Button Clicked.");

  }
  _onPressButton() {
    Alert.alert(
      'Skip',
      'Do you want to skip this question?',
      [
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
 
  render() {
    var love_icons = [];
    //var txt_buts=[];
    for(let i = 0; i < nCnt; i++){
      love_icons.push(
        <View key={i}>
        <Image source={require('../../asserts/images/love_icon.png')}
                  style={styles.img_love_logo}>
        </Image>     
        </View>
      )
    } 
    
    // for(let j = 0; j < nwCnt; j++){
    //   txt_buts.push(
    //     <View key={j} >
    //     <TouchableOpacity  activeOpacity={0.5}  onPress={this._onPressButton}>
    //       <Text style={styles.lbl_setence} >  a) Definite Article</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )
    // } 
    
     if(this.state.isLoading){
      return(
        <View style={{flex:1,paddingTop:20}}>
            <ActivityIndicator size="large" />
        </View>
      )
    }
    var txt_buts = this.state.data.map(function(item,j){
      return (      
                <View key={j} >
                <Text style={styles.lbl_grammar}>   {item.questionTitle}</Text>
                <TouchableOpacity  activeOpacity={0.5}  onPress={this._onPressButton}>
                  <Text style={styles.lbl_setence} > {item.anwers[0]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  activeOpacity={0.5}  onPress={this._onPressButton}>
                  <Text style={styles.lbl_setence} > {item.anwers[1]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  activeOpacity={0.5}  onPress={this._onPressButton}>
                  <Text style={styles.lbl_setence} > {item.anwers[2]}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  activeOpacity={0.5}  onPress={this._onPressButton}>
                  <Text style={styles.lbl_setence} > {item.anwers[3]}</Text>
                  </TouchableOpacity>
                </View>
     )
    });
    return (                  
      <View style={styles.container}>
          <View style={styles.back_sc}>
          <TouchableOpacity  activeOpacity={0.5}  onPress={() => this.props.navigation.navigate('Welcome')}>
          <Image source={require('../../asserts/images/ic_action_previous_item.png')}
                style={styles.img_quiz_logo} >
          </Image>
          
          </TouchableOpacity>
          <Text style={styles.lbl_quiz}>  Quiz</Text>
          </View>
          <View style={{margin:20, flexDirection: 'row',marginBottom:0
              }}>
          {love_icons}
        </View>
        <View style={styles.textContainer}>
       
           {txt_buts[0]}
          

            <View style={styles.mbuttonStyle}>                     
            <Button
            onPress={() => { this.Show_Custom_Alert(true) }}         
            title="Next Question" 
            //style={styles.buttonStyle}
          />  
            </View>
        </View>
      
        <Modal
      
      visible={this.state.Alert_Visibility}

      transparent={true}

      animationType={"fade"}

      onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >


        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>


            <View style={styles.Alert_Main_View}>


                <Text style={styles.Alert_Title}>Skip</Text>


                {/* <View style={{ width: '100%', height: 2, backgroundColor: '#ff0000'}} /> */}


                <Text style={styles.Alert_Message}> Do you want to skip this question? </Text>


                {/* <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} /> */}


                <View style={{flexDirection: 'row', height: '30%'}}>

                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                        activeOpacity={0.7} 
                        >

                        <Text style={styles.TextStyle}> NO </Text>
            
                    </TouchableOpacity>

                    {/* <View style={{ width: 1, height: '100%', backgroundColor: '#fff'}} /> */}

                    <TouchableOpacity 
                        style={styles.buttonStyle} 
                        onPress={this.ok_Button} 
                        activeOpacity={0.7} 
                        >

                        <Text style={styles.TextStyle}> YES </Text>
            
                    </TouchableOpacity>

                </View>
              
            </View>

        </View>


       </Modal>
       

       </View>
    

    );
}
}

export default GrammarPage;