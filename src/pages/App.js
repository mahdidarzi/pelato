
import { Router, Scene,Drawer,Lightbox} from "react-native-router-flux";
import React, {Component} from 'react';
import {StyleSheet,Text,I18nManager,} from 'react-native';
import  register  from "./../pages/register";
import  login  from "../pages/login";
import  login2  from "../pages/login2";
import  home  from "../pages/home";
import splash from "../pages/splash";
import rooms from "./rooms";
import date from "./date";
import factor from "../pages/factor";
import wv from "../pages/wv"; 

import showCenter from "../pages/showCenter"; 
import wallet from "../pages/wallet"; 
import DrawerLayout from "../pages/DrawerLayout"; 
import unique_code from "../pages/unique_code"; 
import subscribe from "../pages/subscribe";  
import as from "../pages/as"; 
import lightbox from "../pages/lightbox"; 
import professionnal_Search from "../pages/professionnal_Search";
import test from "../pages/test";
 //I18nManager have to test that performance
I18nManager.forceRTL(true);

// Actions.factor({name:tem.room_timings[0].price})






export default class App extends Component {
  
  render() {
    return (
    
     <Router >
             <Drawer
      contentComponent={DrawerLayout}
      drawerPosition="right"
  >        
         <Scene key='lightboxMM'  lightbox>
    <Scene key='root' modal hideNavBar>
    <Scene key='splash' component={splash} initial/>
    <Scene key='test' component={test} />
    <Scene key='login2' component={login2}/>
    <Scene key='register' component={register} />
    <Scene key='login' component={login}  />
    <Scene key='home' component={home}  />
       <Scene key='rooms' component={rooms}  />
       <Scene key='date' component={date}  />
       <Scene key='factor' component={factor}  />
       <Scene key='wallet' component={wallet}  /> 
       <Scene key='unique_code' component={unique_code}/>  
       <Scene key='subscribe' component={subscribe} /> 
       <Scene key='as' component={as} /> 
       <Scene key='showCenter' component={showCenter}/>
       <Scene key='wv' component={wv}  /> 
       <Scene key='professionnal_Search' component={professionnal_Search}  /> 
    </Scene>
    <Scene key='lightbox' component={lightbox} /> 
  </Scene>
          </Drawer>
       </Router>


       
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

