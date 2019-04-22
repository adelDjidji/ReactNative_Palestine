import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid,Image,TextInput, Button ,Alert} from 'react-native';

import {Avatar ,IconToggle,ActionButton, Subheader,Toolbar, Snackbar } from 'react-native-material-ui';

import { Drawer } from 'react-native-material-ui';

export default class PageHome extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      isVisible:true,
      usr: "user",
      code:"2" };
    }
  
    static navigationOptions = {
      drawerLabel: 'الرئيسية',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/logo2.png')}
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
  render() {    
    const {isVisible} = this.state.isVisible

    return (
      <View style={{marginTop:30}}>
      <Toolbar
        leftElement="menu"
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
        }}
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

      <Snackbar visible={isVisible} message="hello World" onRequestClose={() => this.setState({ isVisible: false })} />


        <Image
        style={{width: 60, height: 60}}
          source={require('./assets/logo.png')}
        />
        <Text>مرحبا بكم</Text>
        
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
