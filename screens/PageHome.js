import React from 'react';
import { StyleSheet, View, ToolbarAndroid,Image,TextInput, Button ,Alert, 
  BackHandler,
  ToastAndroid,} from 'react-native';

import {Toolbar } from 'react-native-material-ui';
import { Icon, Text } from "native-base";

import { Drawer } from 'react-native-material-ui';
import axios from 'axios'
export default class PageHome extends React.Component {
  constructor(props){
    super(props);
    this.nb=0
    this.state = { 
      quit:false,
      isVisible:true,
      usr: "user",
      code:"2" 
    };
    axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/todos',
    })
      .then(function(response) {
        console.log("response")
      });
     

    }
  
    static navigationOptions = {
      drawerLabel: 'الرئيسية',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/logo2.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }

onActionSelected=(position)=> {
      if (position === 0) { // index of 'Settings'
        //showSettings();
      }
    }

    // static navigationOptions = {
    //   drawerLabel: 'Notifications',
    //   drawerIcon: ({ tintColor }) => (
    //     <Icon name="user"></Icon>
    //   ),
    // };
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton=() =>{
    // this.nb++
      ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
      if(this.state.quit) return false
      else{
        this.setState({quit:true})
        ToastAndroid.show('going to exit', ToastAndroid.SHORT);
      // BackHandler.exitApp()
      return true;
      }
      
  }

  render() {    
    const {isVisible} = this.state.isVisible

    return (
      <View >
      <Toolbar
        leftElement="menu"
        centerElement="الحصالة الإلكترونية"
        // searchable={{
        //   autoFocus: true,
        //   placeholder: 'Search',
        // }}
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        onRightElementPress={ (label) => { Alert.alert(label+" right !") }}
        onLeftElementPress={ (label) => { this.props.navigation.openDrawer();
         }}
      />  
      <View style={styles.container}> 
          <Image
            style={{width: 60, height: 60}}
              source={require('../assets/logo.png')}
            />
            <Text style={styles.h2}>مرحبا بكم</Text>
            <Text >حسابك في انتظار التفعيل</Text>
            <Icon type="FontAwesome" name="time" />

      </View>

        
        
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  h2:{
    fontSize:20,
    margin:15,
    fontWeight:'bold'
  },
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    //flex: 1,
   // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
