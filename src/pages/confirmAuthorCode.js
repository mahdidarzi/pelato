import React, {Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import inputesAndBtnsStyles from '../assets/styles/confirmAuthorCodeStlyes';
export default class confirmAuthorCode extends Component {
    constructor (){
        super();
        this.state = {
            apiToken : '',
        }
    }
    render() {
        return (
            <LinearGradient
             colors = {['#dff9fb','#dff9fb','#d1ccc0','#ffda79','#ffda79','#f6b93b', '#f6b93b', '#ffa502','#FFC312','#FFC312']}
             style = {inputesAndBtnsStyles.gradiant}>
                <View style = {inputesAndBtnsStyles.container}>
                            <TextInput 
                            placeholder = '    کد تایید'
                            style = {inputesAndBtnsStyles.textinput}
                            onChangeText = {(apiToken) => this.setState({apiToken})}/>
                            <TouchableOpacity onPress = {this.checkAuthenticationcode.bind(this)} style = {inputesAndBtnsStyles.buttonView}>
                                <Text style = {{color :  '#fff',alignItems : 'center',fontSize : 20}}>ورود</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.checkAuthenticationcode.bind(this)} style = {inputesAndBtnsStyles.buttonView}>
                                <Text style = {{color :  '#fff',alignItems : 'center',fontSize : 20}}>ارسال مجدد کد تایید</Text>
                            </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
    async checkAuthenticationcode() {
        try {
            const {apiToken} = this.state;
            let
            content1 = 'لطفا کد تایید را صحیح وارد نمایید',
            content2 = 'لطفا کد تایید را وارد نمایید';
            let json, response = await fetch('http://192.168.157.2:8000/api/v1/login', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    apiToken : apiToken,
                })
            });
            json = await response.json();
            console.log(json);
            if(json.code == 200) {
                await this.setToken(json.data[0].api_token)
            }
            if(json.code == 422) {
                Actions.lightbox({content : content1})
            }
            if(response.status == 422 && apiToken == '') {
                Actions.lightbox({content : content2})
            }
            if(json.code == 302) {
                alert( 'اطلاعات شما با هم مطابقت ندارد')
            }

        } catch(error) {
            console.log(error);
        }
    }
    async setToken(apiToken) {
        //to check in app that user have logined
        try {
            await AsyncStorage.setItem('apiToken',apiToken);
            Actions.replace('home');
        } catch(error) {
            console.log(error);
        }
    }
}