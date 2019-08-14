import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
 
} from 'react-native';
import { Actions } from "react-native-router-flux";
import LinearGradient from 'react-native-linear-gradient';
import { Thumbnail } from 'native-base';
export default class register extends Component {
    constructor (){
        super();
        this.state={
            // name:'',
            phonenumber:'',
            username:'',
            off:'',
        }
    }
    register=()=>{
        const {name,phonenumber,username,off}=this.state;
        const count=username.valueOf();
        if(  phonenumber.valueOf()!==''&& username.valueOf()!=='')  {

          let  response= fetch('http://192.168.157.2:8000/api/v1/register',{

                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
        
                body: JSON.stringify({
                    // we will pass  our input data to server
                  
                    phonenumber: phonenumber,
                    username:username,
                    off:off
                    

                })
            
            });
            console.log(response.status);
            Actions.replace('confirmAuthorCode');
        
        }
}

async registertest() {
    try {
        let { phonenumber , username,off } = this.state;

        var response = await fetch('http://192.168.157.2:8000/api/v1/register', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
             
                phonenumber: phonenumber,
                username:username,
                off:off,
            })
        });
        let json = await response.json();
        console.log(json);
        console.log(response.status);
    // let j=await response.json();
    // console.log(j);
    // console.log(j.errors.phonenumber);
    if(json.code==122) {
        Actions.lightbox({content : content1})
    }
    if(json.code== 200) {
        console.log('200')
        Actions.replace('confirmAuthorCode');
    }

    if( phonenumber.valueOf()=='' && username.valueOf()==''){ 
        Actions.lightbox({content : content2})
    }
    if( phonenumber.valueOf()=='' && username.valueOf()!=''){ 
        Actions.lightbox({content : content2})
    }

    if( username.valueOf()=='' && phonenumber.valueOf()!=''){ 
        Actions.lightbox({content : content3})
    }

    if( phonenumber.length>=1 && phonenumber.length<= 11 )

    {
        
          if(response.status === 422 && phonenumber.valueOf()!='' && username.valueOf()!='' ){
            Actions.lightbox({content : content4})  
        }
    }
        // if(response.status === 422 && phonenumber.valueOf()!='' && username.valueOf()!='' ){  
        //     alert('این شماره ثبت شده است')
        // }
        // if(response.message=='The given data was invalid.'){  
        //     alert ('این شماره قبلا ثبت شده است')
        //     }
      
        if( phonenumber.length<=10 && phonenumber.valueOf()!=''){
            Actions.lightbox({content : content5})  
        }
  
    // var json = await response.json();
    // if(json.errors== 'The phonenumber has already been taken.'){ 
        
    //     console.log(json.errors)
    //     alert('re')
 

     
    // }

      
       

    } catch(error) {
        console.log(error);
    }
}

    render() {
        let content1 = 'کد معرف شما صحیح نمی باشد',
        content2 = 'لطفا تمام فیلد ها را پر کنید',
        content3 = ' لطفا فیلد نام کاربری را پر کنید',
        content4 = 'این شماره قبلا در سیسیتم ثبت شده است',
        content5 = 'فیلد شماره تلفن باید 11 رقم باشد';
        return (
        //     <View style={styles.container}>
        //     <StatusBar hidden />
        //         {/* <ImageBackground style={[StyleSheet.absoluteFill, {width: null, height: null}]} source={Background} > */}
                
        //  <LinearGradient colors={['#dff9fb','#dff9fb','#d1ccc0','#ffda79','#ffda79','#f6b93b', '#f6b93b', '#ffa502','#FFC312','#FFC312']} style={{width:400,height:600}}>

        //  {/* <LinearGradient colors={['#ffda79','#ffa801','#dff9fb', '#dff9fb', '#ffa502','#ffa502']} style={{width:400,height:600}}> */}
 

                  
                 
            //   </LinearGradient>
            <LinearGradient colors={['#dff9fb','#dff9fb','#d1ccc0','#ffda79','#ffda79','#f6b93b', '#f6b93b', '#ffa502','#FFC312','#FFC312']} style={styles.gradiant}>
            <View style={styles.container}>

              {/* </ImageBackground> */}
              <Thumbnail source={require('./../assets/image/pelato.png')} style={{width:200,height:100}} />
                <TextInput 
               placeholder= '         لطفا شماره تلفن خود را وارد کنید                         '
               style={styles.textinput}
               onChangeText={(phonenumber) => this.setState({phonenumber})}
               />
                   
                   <TextInput 
               placeholder='            لطفا نام کاربری خود را وارد کنید'
               style={styles.textinput}
               onChangeText={(username)=> this.setState({username})}
               secureTextEntry
               
              />

                <TextInput 
               placeholder='     لطفا کد معرف خود را وارد کنید (اختیاری)'
               style={styles.textinput}
               onChangeText={(off)=> this.setState({off})}
               secureTextEntry
               
              />
                  
                  <TouchableOpacity onPress={this.registertest.bind(this)} style={styles.buttonView}>
                            <Text style={{color: '#fff',alignItems:'center',fontSize:20}}>عضویت</Text>
                        </TouchableOpacity>
                  
            {/* </View> */}
            
            </View>
            </LinearGradient>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#919191',
    },
    text: {
        width: 250,
        height: 35,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
      },
      buttonView: {
        width:250,
        height:44,
        marginTop: 10,
        backgroundColor: "#EA2027",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
        borderRadius:25,
        marginTop:15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1.3,
        borderColor:'black'
      },
      textinput:{
          marginTop:15,
          backgroundColor:'white',
          width:250,
          height:44,
          borderRadius:25,
          marginTop:15,
          alignItems: 'center',
          justifyContent: 'center',
            borderWidth:1.4,
          borderColor:'#D980FA'
          

      },
      gradiant:{
        width:400,height:600,
        marginTop:0,
        alignItems: 'center',
        justifyContent: 'center',
      }

    

});
