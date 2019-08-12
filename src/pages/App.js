import { Router, Scene,Drawer} from 'react-native-router-flux';
import React, {Component} from 'react';
import  register  from './register';
import  login  from './login';
import  login2  from './login2';
import  pelatoList  from './pelatoList';
import splash from './splash';
import rooms from './rooms';
import date from './date';
import factor from './factor';
import wv from './wv'; 
import showCenter from './showCenter'; 
import wallet from './wallet'; 
import DrawerLayout from './DrawerLayout'; 
import unique_code from './unique_code'; 
import subscribe from './subscribe';  
import lightbox from './lightbox'; 
import professionnal_Search from './professionnal_Search';
import test from './test';
export default class App extends Component { 
  render() {
    return (
     <Router>
             <Drawer
              contentComponent = {DrawerLayout}
              drawerPosition = 'right' >        
              <Scene key='lightBox'  lightbox>
                  <Scene key = 'root' modal hideNavBar>
                      <Scene key = 'splash' component = {splash} initial/>
                      <Scene key = 'test' component = {test}/>
                      <Scene key ='login2' component = {login2}/>
                      <Scene key = 'register' component = {register}/>
                      <Scene key = 'login' component = {login}/>
                      <Scene key = 'pelatoList' component = {pelatoList}/>
                      <Scene key = 'rooms' component = {rooms}/>
                      <Scene key = 'date' component = {date}/>
                      <Scene key = 'factor' component = {factor}/>
                      <Scene key = 'wallet' component = {wallet}/> 
                      <Scene key = 'unique_code' component = {unique_code}/>  
                      <Scene key = 'subscribe' component = {subscribe}/> 
                      <Scene key = 'showCenter' component = {showCenter}/>
                      <Scene key = 'wv' component = {wv}/> 
                      <Scene key = 'professionnal_Search' component = {professionnal_Search}/> 
                 </Scene>
                 <Scene key = 'lightbox' component = {lightbox}/> 
              </Scene>
          </Drawer>
    </Router>
    );
  }
}