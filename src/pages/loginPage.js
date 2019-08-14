import React, {Component} from 'react';
import {Text,View,TextInput,TouchableOpacity, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import inputesAndBtnsStyles from '../assets/styles/confirmAuthorCodeStlyes';
export default class loginPage extends Component {
    constructor (){
        super();
        this.state = {
            phonenumber :'',
        }
    }
    render() {
        let content1 = 'لطفا شماره تلفن خود را صحیح وارد کنید',
        content2 = 'لطفا به بخش ثبت نام مراجه کنید',
        content3 = 'لطفا فیلد شماره تلفن را پر کنید',
        content4 = 'لطفا به بخش ثبت نام مراجه کنید';
        return (
            <LinearGradient
             colors = {['#dff9fb','#dff9fb','#d1ccc0','#ffda79','#ffda79','#f6b93b', '#f6b93b', '#ffa502','#FFC312','#FFC312']}
              style = {inputesAndBtnsStyles.gradiant}>
                <View style = {inputesAndBtnsStyles.container}>
                    <TextInput 
                        placeholder = '    شماره تلفن'
                        style = {inputesAndBtnsStyles.textinput}
                        onChangeText = {(phonenumber) => this.setState({phonenumber})}/>
                    <TouchableOpacity onPress = {()=>this.requrestLoginFromApi()} style = {inputesAndBtnsStyles.buttonView}>
                        <Text style = {{color: '#fff',alignItems:'center',fontSize:20}}>ورود</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>Actions.replace('register')} style = {inputesAndBtnsStyles.buttonView}>
                        <Text style = {{color: '#fff',alignItems:'center',fontSize:20}}>ثبت نام</Text>
                    </TouchableOpacity> 
                </View>
            </LinearGradient> 
        );
    }
    async requrestLoginFromApi() {
        try {
            let {phonenumber} = this.state;
            let response = await fetch('http://192.168.157.2:8000/api/v1/login2', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    phonenumber : phonenumber, 
                })
            });
            let json = await response.json();
            if(json.code == 200){
                await this.setDataUser(json.data[0].api_token)
                Actions.replace('home');
            }
            if(json.code == 423){
                Actions.lightbox({content : content1})
            }
            if(json.code == 201){
                Actions.lightbox({content :content2 })
            }
            if(json.code == 422) {
                Actions.lightbox({content : content1})
            }
            if(response.status == 422 && phonenumber == '') {
                Actions.lightbox({content : content3})
            }
            if(response.status == 422 && phonenumber.length == 11) {
                Actions.lightbox({content : content4})
            }
            if(json.code == 302) {
                alert( 'اطلاعات شما با هم مطابقت ندارد')
            }

        } catch(error) {
            console.log(error);
        }
    }
    async setDataUser(apiToken) {
        try {
            await AsyncStorage.setItem('apiToken',apiToken); 
        } catch(error) {
            console.log(error);
        }
    }
}