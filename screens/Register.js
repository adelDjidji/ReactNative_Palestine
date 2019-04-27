import React from 'react';
import { StyleSheet, View,Image,TextInput ,Alert, Dimensions} from 'react-native';

import { Container, Input, Left, Body, Content, Button, Icon, Title, Text,Form, Item, Picker,
  Col, Row, Grid } from "native-base";

import { Root } from "native-base";
import { Font, AppLoading } from "expo";


import { Drawer, RadioButton,Toolbar } from 'react-native-material-ui';
import Walo from './walo'


const {width}= Dimensions.get('window')

export default class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      name: "user",//الاسم اللقب
      phone:"03003033",//الهاتف
      code:"2" ,//الكود
      loading:true,
      type:"key0",  //الصفة
      wilaya:"2",//الولاية
      money:50//المقدار المالي
    };
    }
    async componentWillMount() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }
    

    static navigationOptions = {drawerLabel: Walo}

onActionSelected=(position)=> {
      if (position === 0) { // index of 'Settings'
        //showSettings();
      }
    }
    onValueChange1= (type)=>{
      this.setState({type})
    }
    onValueChange2= (wilaya)=>{
      this.setState({wilaya})
    }
    onValueChange3= (money)=>{
      this.setState({money})
    }
register=()=>{

}
  render() {    
    const wilayas=[
      {"key":1,"label":"أدرار"},
      {"key":2,"label":"الشلف"},
      {"key":3,"label":"الأغواط"},
      {"key":4,"label":"ام البواقي"},
      {"key":5,"label":"باتنة"},
      {"key":6,"label":"بجاية"},
      {"key":7,"label":"بسكرة"},
      {"key":16,"label":"الجزائر"},
      {"key":18,"label":"جيجل"},
      {"key":19,"label":"سطيف"},
      {"key":20,"label":"سعيدة"}
    ]
if(this.state.loading){
  return (<View><Text>Loading</Text></View>)
}else
    return (
      // <View style={{marginTop:30}}>
      // </View> <Toolbar
      //   leftElement="menu"
      //   centerElement="الحصالة الإلكترونية"
      //   // searchable={{
      //   //   autoFocus: true,
      //   //   placeholder: 'Search',
      //   // }}
      //   rightElement={{
      //       menu: {
      //           icon: "more-vert",
      //           labels: ["item 1", "item 2"]
      //       }
      //   }}
      //   onRightElementPress={ (label) => { Alert.alert(label+" right !") }}
      //   onLeftElementPress={ (label) => { this.props.navigation.openDrawer();
      //    }}
      // />
      <Container>
      <Toolbar
        leftElement="person"
        centerElement="تسجيل حساب جديد"
      />
      <Content>
        <Form style={{padding:18}}>
        <Text>إختر الصفة</Text>
          <Item style={styles.item} picker rounded>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="اختر الفئة"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.type}
              onValueChange={this.onValueChange1.bind(this)}
            >
              <Picker.Item label="عضو عادي" value="key0" />
              <Picker.Item label="مشرف ولائي" value="key1" />
            </Picker>
          </Item>
          <Item rounded style={styles.item}>
            <Input style={styles.input} placeholder='الاسم و اللقب' value={this.state.name} onChangeText={(name)=>this.setState({name})}/>
            <Icon active type="FontAwesome" name='user' />
          </Item>
          <Text>إختر المقدار المالي الممكن للتبرع الشهري</Text>
          <Item style={styles.item} picker rounded>
              <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="المقدار الممكن للتبرع الشهري"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.money}
                  onValueChange={this.onValueChange3.bind(this)}
                >
                  <Picker.Item label="50 دينار جزائري" value="50" />
                  <Picker.Item label="100 دينار جزائري" value="100" />
                  <Picker.Item label="500 دينار جزائري" value="500" />
                  <Picker.Item label="1000 دينار جزائري" value="1000" />
                  <Picker.Item label="2000 دينار جزائري" value="2000" />
                </Picker>
          </Item>
          

          <Item style={styles.item} rounded>
            <Input style={styles.input} placeholder='رقم الهاتف' value={this.state.phone} onChangeText={(phone)=>this.setState({phone})}/>
            <Icon active type="FontAwesome" name='phone' />
          </Item>
          <Item style={styles.item} picker rounded>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="الولاية"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.wilaya}
              onValueChange={
                  this.onValueChange2.bind(this)
              }
            >
            {wilayas.map(w=>(<Picker.Item label={w.label} value={w.key} />))}
              
            </Picker>
          </Item>
          <Button full success style={{...styles.btn,}}
          onPress={this.register}
          >
              <Icon type="FontAwesome" name="user-plus" />
            <Text> تسجيل</Text>
          </Button>
        </Form>
    </Content>
      </Container>

      

        
        
      // </View>
    );
    
  }
}

// const old= (<View style={{...styles.container,marginTop:50}}>
//   <Image
//     style={{width: 60, height: 60}}
//       source={require('../assets/logo.png')}
//     />
//     <Text>سجل حساب جديد</Text>
// </View>
// <View style={{flex:1}}>
// <Picker
//   selectedValue={this.state.language}
//   style={{height: 50, width: 200}}
//   onValueChange={(itemValue, itemIndex) =>
//     this.setState({language: itemValue})
//   }>
//   <Picker.Item label="Java" value="java" />
//   <Picker.Item label="JavaScript" value="js" />
// </Picker>
  
// </View>)
const styles = StyleSheet.create({
  item:{
    marginBottom:5,
    marginTop:5,
  },
  input:{
    textAlign:'right',
    
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
