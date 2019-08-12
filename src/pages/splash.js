import React from 'react';
import {StatusBar, AsyncStorage, Image, StyleSheet,ActivityIndicator, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class splash extends React.Component {
    componentDidMount() {
        this.checkapiToken()
    }
    render() {
        return (
            <View  style = {styles.container}>
                <StatusBar hidden/>
                <Image source = {require('./../assets/image/splash.jpg')} style = {styles.backgroundImage}/>
                <ActivityIndicator color = 'green' size = 'large' />
            </View>
        )
    }
    async checkapiToken() {
        //check that user registered in app
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
            (apiToken != null) ?  Actions.showCenter({simpOrGodCenter:'goodestCenters'}) : Actions.jump('login2');
        } catch(error) {
            console.log(error)
        }
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#ffa801',
   },
        backgroundImage : {
        width : 300,
        height : 200,
        backgroundColor : '#F5FCFF',
        marginBottom : 45
      }
});