import React from 'react';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/PageHome'
import Test from './screens/Test'
import { StyleSheet, Text, View, FlatList,Image,SafeAreaView, ScrollView ,Dimensions} from 'react-native';

import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';

import { Divider, ListItem, ListView , Subheader} from 'react-native-material-ui';


//custom drawer navigator
const Custom=(props)=>(
  <SafeAreaView style={{padding:50, alignContent:'center', alignItems:'center', flex:1}}>
  <ScrollView>
  
  
        <Image
        style={{width:50, height:50}}
          source={require('./assets/logo.png')}
        />
        <Subheader text="الاسم و اللقب" /> 
        <Divider/>
        
        <DrawerItems {...props}/>

  </ScrollView>
  
      
  </SafeAreaView>
)
const Main = createDrawerNavigator(
  {
    Login: {screen:LoginScreen},
    Home: {screen:HomeScreen},
    Test: {screen:Test},
  },
  {
  
    initialRouteName: 'Home',
    contentComponent:Custom,
    headerMode: 'none',
    navigationOptions: {
        headerVisible: true,
      },
  },
);

const Root = createAppContainer(Main);




export default class MyApp extends React.Component {
  render() {
    return <Root/>;
  }
}
