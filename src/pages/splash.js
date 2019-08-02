import React from 'react';
import { StatusBar ,AsyncStorage ,Image,StyleSheet,View,} from 'react-native';
import { Container , Spinner, Text, } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import { Actions } from './../assets/image/splash.jpg';


export default class splash extends React.Component {
    componentWillMount() {

// AsyncStorage.removeItem('apiToken');

        this.CheckUserLogin().then(status => {
            if(status) {
                Actions.jump('goodest_centers');
            } else {
                // Actions.reset('register');
                Actions.replace('login2');

            }
        });

    }

    render() {
        
        return (
            <Container  style={{justifyContent:'center',alignItems:'center',backgroundColor:'#ffa801'}}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/>
                {/* #ffa502 */}
                {/* backgroundColor:'#ffa801' */}
              

               
          

        <Image source={require('./../assets/image/splash.jpg')}  style={styles.backgroundImage}/>

  <Spinner color='green' />
  
   
            </Container>
        )
    }

    async CheckUserLogin() {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
            return apiToken === null
                ? false
                : await this.CheckUserLoginFromApi(apiToken);
        } catch(error) {
            console.log(error)
        }
    }

    async CheckUserLoginFromApi(apiToken) {
        try {
            let response = await fetch(`http://192.168.157.2:8000/api/v1/user?api_token=${apiToken}`);
            return response.status === 200;
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
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
   },
        backgroundImage:{
        width:300,
        height:200,
        backgroundColor: '#F5FCFF',
        marginBottom:45
        // flex: 1,
        // resizeMode: 'stretch',
      }
});