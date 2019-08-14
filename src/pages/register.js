import React, {Component} from 'react';
import {Text,View,TextInput,TouchableOpacity} from 'react-native';
import {Actions} from "react-native-router-flux";
import LinearGradient from 'react-native-linear-gradient';
import {Thumbnail} from 'native-base';
import inputesAndBtnsStyles from '../assets/styles/confirmAuthorCodeStlyes';
export default class register extends Component {
    constructor (){
        super();
        this.state = {
            phonenumber : '',
            username : '',
            off : '',
        }
    }
async registerUser() {
    try {
        let content1 = 'کد معرف شما صحیح نمی باشد',
        content2 = 'لطفا تمام فیلد ها را پر کنید',
        content3 = ' لطفا فیلد نام کاربری را پر کنید',
        content4 = 'این شماره قبلا در سیسیتم ثبت شده است',
        content5 = 'فیلد شماره تلفن باید 11 رقم باشد';
        let {phonenumber,username,off} = this.state;
        let json, response = await fetch('http://192.168.157.2:8000/api/v1/register', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                phonenumber : phonenumber,
                username : username,
                off : off,
            })
        });
         json = await response.json();
    if(json.code == 122) {
        Actions.lightbox({content : content1})
    }
    if(json.code ==  200) {
        Actions.replace('confirmAuthorCode');
    }
    if( phonenumber.valueOf() == '' && username.valueOf() == ''){ 
        Actions.lightbox({content : content2})
    }
    if( phonenumber.valueOf() == '' && username.valueOf() != ''){ 
        Actions.lightbox({content : content2})
    }
    if( username.valueOf() == '' && phonenumber.valueOf() != ''){ 
        Actions.lightbox({content : content3})
    }
    if( phonenumber.length >= 1 && phonenumber.length <= 11 )
    {
          if(response.status == 422 && phonenumber.valueOf() != '' && username.valueOf() != '' ){
            Actions.lightbox({content : content4})  
        }
    }
        if( phonenumber.length <= 10 && phonenumber.valueOf() != ''){
            Actions.lightbox({content : content5})  
        }
    } catch(error) {
        console.log(error);
    }
}
    render() {
        return (
            <LinearGradient 
            colors = {['#dff9fb','#dff9fb','#d1ccc0','#ffda79','#ffda79','#f6b93b', '#f6b93b', '#ffa502','#FFC312','#FFC312']}
             style = {inputesAndBtnsStyles.gradiant}>
            <View style = {inputesAndBtnsStyles.container}>
              <Thumbnail source = {require('./../assets/image/pelato.png')} style = {{width:200,height:100}} />
                <TextInput 
               placeholder =  '         لطفا شماره تلفن خود را وارد کنید                         '
               style = {inputesAndBtnsStyles.textinput}
               onChangeText = {(phonenumber) => this.setState({phonenumber})}
               />
                   <TextInput 
               placeholder = '            لطفا نام کاربری خود را وارد کنید'
               style = {inputesAndBtnsStyles.textinput}
               onChangeText = {(username)=> this.setState({username})}
               secureTextEntry
              />
                <TextInput 
               placeholder = '     لطفا کد معرف خود را وارد کنید (اختیاری)'
               style = {inputesAndBtnsStyles.textinput}
               onChangeText = {(off)=> this.setState({off})}
               secureTextEntry
               
              />  
                  <TouchableOpacity onPress = {this.registerUser.bind(this)} style = {inputesAndBtnsStyles.buttonView}>
                            <Text style = {{color : '#fff',alignItems :'center',fontSize : 20}}>عضویت</Text>
                        </TouchableOpacity>
            </View>
            </LinearGradient>
        );
    }
}