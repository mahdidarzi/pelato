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







export default class login extends Component {
    constructor (){

        super();
        this.state={
            api_token:'',
           
        }
    }
    componentWillMount(){
        
        // this.requrestLoginFromApi();        
    }

   
    render() {
        let
         content1 = 'لطفا کد تایید را صحیح وارد نمایید',
         content2 = 'لطفا کد تایید را وارد نمایید';
        return (
<LinearGradient colors={['#dff9fb','#dff9fb','#d1ccc0','#ffda79','#ffda79','#f6b93b', '#f6b93b', '#ffa502','#FFC312','#FFC312']} style={styles.gradiant}>
            <View style={styles.container}>
                {/* <Image style={[StyleSheet.absoluteFill, {width: null, height: null}]} source={Background} /> */}
                    
                  
                     
                        <TextInput 
               placeholder='    کد تایید'
               style={styles.textinput}
               onChangeText={(api_token) => this.setState({api_token})}
               />
                     <TouchableOpacity onPress={this.requrestLoginFromApi.bind(this)} style={styles.buttonView}>
                            <Text style={{color: '#fff',alignItems:'center',fontSize:20}}>ورود</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={this.requrestLoginFromApi.bind(this)} style={styles.buttonView}>
                            <Text style={{color: '#fff',alignItems:'center',fontSize:20}}>ارسال مجدد کد تایید</Text>
                        </TouchableOpacity>
                  
                  {/* you hav eamistake for bind(this)  */}
                

            </View>
            </LinearGradient>

           
        );
   
    }

    async requrestLoginFromApi() {
        try {
            let { api_token  } = this.state;

            let response = await fetch('http://192.168.157.2:8000/api/v1/login', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    api_token:api_token,
                    
                })
            });
            let json = await response.json();

            // we can use of response.code
            if(json.code === 200) {

                await this.setDataUser(json.data[0].api_token)
            }

            if(json.code == 422) {
                Actions.lightbox({content : content1})
            }

            if(response.status == 422 && api_token=='') {
                // Validate
                Actions.lightbox({content : content2})
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
            
            Actions.replace('home');
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
