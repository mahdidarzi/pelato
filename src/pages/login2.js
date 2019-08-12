import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
   
    TextInput,
    TouchableOpacity,
    Image,
    AsyncStorage
    
} from 'react-native';
 

import Background from './../assets/image/2.jpg';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';







export default class login2 extends Component {
    constructor (){

        super();
        this.state={
            phonenumber:'',
           
        }
    }
    componentWillMount(){
        
        // this.requrestLoginFromApi();        
    }

   
    render() {
        let content1 = 'لطفا شماره تلفن خود را صحیح وارد کنید',
        content2 = 'لطفا به بخش ثبت نام مراجه کنید',
        content3 = 'لطفا فیلد شماره تلفن را پر کنید',
        content4 = 'لطفا به بخش ثبت نام مراجه کنید';
        return (
<LinearGradient colors={['#dff9fb','#dff9fb','#d1ccc0','#ffda79','#ffda79','#f6b93b', '#f6b93b', '#ffa502','#FFC312','#FFC312']} style={styles.gradiant}>
            <View style={styles.container}>
                {/*this.requrestLoginFromApi.bind(this) <Image style={[StyleSheet.absoluteFill, {width: null, height: null}]} source={Background} /> */}
                    
                  
                     
                        <TextInput 
               placeholder='    شماره تلفن'
               style={styles.textinput}
               onChangeText={(phonenumber) => this.setState({phonenumber})}
               />
                     <TouchableOpacity onPress={()=>this.requrestLoginFromApi()} style={styles.buttonView}>
                            <Text style={{color: '#fff',alignItems:'center',fontSize:20}}>ورود</Text>
                        </TouchableOpacity>
                        
                        
                        <TouchableOpacity onPress={()=>Actions.replace('register')} style={styles.buttonView}>
                            <Text style={{color: '#fff',alignItems:'center',fontSize:20}}>ثبت نام</Text>
                        </TouchableOpacity> 
                  
                  {/* //* you hav eamistake for bind(this)  */}
                

            </View>
            </LinearGradient>

           
        );
   
    }

    async requrestLoginFromApi() {
        // Actions.replace('home');
        try {
            let { phonenumber  } = this.state;

            let response = await fetch('http://192.168.157.2:8000/api/v1/login2', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    phonenumber:phonenumber,
                    
                })
            });
            let json = await response.json();
            console.log(json);
            // console.log(json.data[0].api_token);
            if(json.code==200){
                await this.setDataUser(json.data[0].api_token)
                Actions.replace('home');
            }



// if(json.code== 200) {

                
//     // alert('ok');
//     console.log('okkkkkkkkkkkkk');
//     // console.log(json.data.api_token);
//     await this.setDataUser(json.data.api_token)
//     // Actions.jump('home');

//     // alert('ok');

    
// }

if(json.code==423){
    Actions.lightbox({content : content1})
}
if(json.code==201){
    Actions.lightbox({content :content2 })
}


            // we can use of response.code
           
            if(json.code === 422) {
                // Validate
                Actions.lightbox({content : content1})
            }
            
            // if(response.status === 422) {
            //     // Validate
            //     Actions.lightbox({show:13})
            // }

            if(response.status === 422 && phonenumber=='') {
                // Validate
                Actions.lightbox({content : content3})
            }
            if(response.status === 422 && phonenumber.length==11) {
                // Validate
                Actions.lightbox({content : content4})
            }


            if(json.code === 302) {
                // Auth
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
