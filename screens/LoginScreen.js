import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid,Image,TextInput, Button ,Alert} from 'react-native';
import { green } from 'ansi-colors';

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      s:{marginTop:0,alignItems: 'center',justifyContent: 'center'},
      open:false,
      usr: "user",
      code:"2" };
    }
  
onActionSelected=(position)=> {
      if (position === 0) { // index of 'Settings'
        //showSettings();
      }
    }
login=()=>{
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => this.props.navigation.navigate('Home', {user_id : 2})},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
}
inputDo=()=>{
  if(this.state.open){
    this.setState({s:{marginTop:-250,alignItems: 'center',justifyContent: 'center'}})
  }else 
      this.setState({s:{marginTop:0,alignItems: 'center',justifyContent: 'center'}})
}
static navigationOptions = {
    drawerLabel: 'دخول',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/logo2.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
 
  render() {
   
   console.log("renderr1")
    return (
      <View style={styles.container}>
        <View style={this.state.s}>
        <Image
        style={{width: 100, height: 100}}
          source={require('./assets/logo2.png')}
        />
        <Text style={{margin:20, fontWeight:'bold', fontSize:25}}>الحصالة الإلكترونية</Text>
        <TextInput
        placeholder="اكتب هنا"
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width:200, marginBottom:20, padding:10}}
         onChangeText={(usr) => {
           this.setState({usr})
           this.setState({s:{marginTop:-250,alignItems: 'center',justifyContent: 'center'}})
          }}
          onFocus={()=>{
          this.setState({s:{marginTop:-250,alignItems: 'center',justifyContent: 'center'}})
          console.log("CLICKKKK")
         }}
         onEndEditing={()=>{
          console.log("OUTT")
          this.setState({s:{marginTop:0,alignItems: 'center',justifyContent: 'center'}})
         }}

          value={this.state.usr}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width:200, marginBottom:20, padding:10}}
          onChangeText={(code) => this.setState({code})}
          value={this.state.code}
        />
        
      <View style={[{ width:200, margin: 10, backgroundColor: "red", borderRadius:40 }]}>
              <Button
                onPress={this.login}
                title="           دخول           "
                style={{width:200,marginBottom:20 , borderRadius:20,paddingHorizontal:10}}
                color="green"
              />
      </View>

      <View style={[{ width:200, margin: 10, backgroundColor: "red" }]}>
          <Button
            onPress={this.login}
            title="تسجيل حساب جديد"
            color="black"
          />
      </View>
        </View>
        
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
