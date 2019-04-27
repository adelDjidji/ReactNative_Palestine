import React from 'react';
import { StyleSheet, View, ScrollView,Image,TextInput ,Alert, AsyncStorage, Dimensions} from 'react-native';
import { Container, Header, Left, Body, Content, Button, Icon, Title, Text } from "native-base";

import { green } from 'ansi-colors';
import Walo from "./walo"
import { Root } from "native-base";
import { Font, AppLoading } from "expo";

const {width}= Dimensions.get('window')
export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      s:{marginTop:0,alignItems: 'center',justifyContent: 'center'},
      open:false,
      usr: "adel",
      code:"2",
      loading:true,
     };

      _storeData = async () => {
        try {
          await AsyncStorage.setItem('@MySuperStore:userLogin', 2019);
          await AsyncStorage.setItem('Login', 2019);
          console.log("SAVED")
        } catch (error) {
          console.log("eror saving")
          // Error saving data
        }
      };

      _retrieveData = async () => {
        console.log("try")
        try {
          const value = await AsyncStorage.getItem('userLogin');
          if (value !== null) {
            // We have data!!
            console.log("VALUE===",value);
          }else console.log("no value yet")
        } catch (error) {
          console.log("eoor")
          // Error retrieving data
        }
      };
    }
    static navigationOptions = {
      drawerLabel: Walo
    };
   componentWillMount() {
    console.log("I will mount ")
   }

login=()=>{
  if(this.state.usr=="" || this.state.code=="")
  Alert.alert(
    'عذرا',
    'يرجى ملء كل الخانات',
    [
      // {text: 'Ask me later', onPress: () => this.props.navigation.navigate('Home', {user_id : 2})},
      {
        text: 'حسنا',
        style: 'cancel',
      },
      // {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: true},
  );
  else{
    if(this.state.usr=="adel"){
      _storeData = async () => {
        try {
          await AsyncStorage.setItem('@MySuperStore:userLogin', 2019);
          await AsyncStorage.setItem('Login', 2019);
          console.log("SAVED")
        } catch (error) {
          console.log("eror saving")
          // Error saving data
        }
      };

      this.props.navigation.navigate('Home', {user_id : 2})
    }
    else{
      Alert.alert(
        'عذرا',
        'المعلومات غير صحيحة',
        [
          // {text: 'Ask me later', onPress: () => this.props.navigation.navigate('Home', {user_id : 2})},
          {
            text: 'اعادة',
            style: 'cancel',
          },
          // {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  }
}
register=()=>{
  this.props.navigation.navigate('Register')
}
inputDo=()=>{
  if(this.state.open){
    this.setState({s:{marginTop:-250,alignItems: 'center',justifyContent: 'center'}})
  }else 
      this.setState({s:{marginTop:0,alignItems: 'center',justifyContent: 'center'}})
}

async componentWillMount() {
  await Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
  });
  this.setState({ loading: false });
}


  render() {
   
   if(this.state.loading) return <View><Text>Loading</Text></View>
    else return (
     
 
      <ScrollView>
      <View style={styles.container}>
        <View style={this.state.s}>
        <Image
        style={{width: 100, height: 100}}
          source={require('../assets/logo2.png')}
        />
        <Text style={{margin:20, fontWeight:'bold', fontSize:25}}>الحصالة الإلكترونية</Text>
        <Text style={{margin:20, fontWeight:'bold', fontSize:15}}>
        فلسطين .. فلسطين صبراً ونصراً مِن الله غير بعيد .. لكَ الله يا فلسطين لكَ الله .. يا قدسنا السليب.
        </Text>

        <Text style={{margin:20, fontWeight:'bold', fontSize:20}}>الدخول الى حسابك:</Text>

        <TextInput
        // autoFocus
        // inlineImageLeft={require('../assets/logo2.png')}
        placeholder="اسم المستخدم"
          style={styles.input}
         onChangeText={(usr) => { 
           this.setState({usr})
          //  this.setState({s:{marginTop:-250,alignItems: 'center',justifyContent: 'center'}})
          }}
          onFocus={()=>{
          this.setState({s:{marginTop:0,alignItems: 'center',justifyContent: 'center'}})
          console.log("CLICKKKK")
         }}
         onEndEditing={()=>{
         
          this.setState({s:{marginTop:0,alignItems: 'center',justifyContent: 'center'}})
         }}

          value={this.state.usr}
        />
        <TextInput
        inlineImageLeft='menu'
        inlineImagePadding={5}
          style={styles.input}
          onChangeText={(code) => this.setState({code})}
          onFocus={()=>{
            this.setState({s:{marginTop:0,alignItems: 'center',justifyContent: 'center'}})
            console.log("CLICKKKK")
           }}
           onBlur={()=>{
            console.log("OUTT")
            this.setState({s:{marginTop:0,alignItems: 'center',justifyContent: 'center'}})
           }}
          value={this.state.code}
        />
      
      
      <Button full info style={styles.btn}
      onPress={this.login}
      >
          <Icon type="FontAwesome" name="unlock" />
        <Text>دخول</Text>
      </Button>
      
      <Button full success style={styles.btn}
      onPress={this.register}
      >
          <Icon type="FontAwesome" name="user-plus" />
        <Text> تسجيل حساب جديد</Text>
      </Button>
        </View>
        
        </View>
        </ScrollView>
    );
    
  }
}

const styles = StyleSheet.create({
  btn:{
    marginBottom:20,
    borderRadius:10
  },
  input:{
    height: 40,
     borderColor: '#f4f7fc',
      borderWidth: 1,
      width:250, 
     marginBottom:20,
      padding:10,
      borderRadius:13,
      direction:'rtl',
      textAlign:'right'
  },
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
