import React from 'react';
import {AsyncStorage,StyleSheet} from 'react-native';
import { Button, Text ,Icon,Content,FooterTab,Footer,Container,View} from 'native-base';
import {Actions} from 'react-native-router-flux';
import lightBoxStyle from '../assets/styles/lightBoxStyle'
const PersianCalendarPicker = require('react-native-persian-calendar-picker');
var moment = require('moment-jalaali')
 export default class lightbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        selectedStartDate: null,
        date1 : '',
        date2 : '',
    };
        this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    const { selectedStartDate,test } = this.state;
    const startDate = date ? moment(date).format('jYYYY-jM-jD').toString()  :  '';
    this.setState({ selectedStartDate :  date ? moment(date).format('jYYYY-jM-jD').toString() : '' });
  }
_show_date(){
    const {selectedStartDate} = this.state;
    const hi=selectedStartDate ;
    return (
        <Container style={{ backgroundColor :  'rgba(52,52,52,.5)'}}>
        <Content>
        <PersianCalendarPicker
        nextTitle='بعدی    '
        previousTitle='      قبلی          '
        textStyle={{color : 'white'}}
        onDateChange={this.onDateChange}/>
        <View>
        <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({date1 : hi,show : 1})]}><Text>{hi}</Text></Button>
        </View>
        </Content>
         <Footer>
         <FooterTab>
           <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({date1 : hi,show : 1,show2 : 1,date2 : hi})]}>
             <Text>ثبت تاریخ مورد نظر</Text>
           </Button>
         </FooterTab>
       </Footer>
       </Container>
);
}
_show_date2(){
    const { selectedStartDate,test } = this.state;
    const hi2 = selectedStartDate ;
    return (
        <Container style={{ backgroundColor :  'rgba(52,52,52,.5)'}}>
            <Content>
                <PersianCalendarPicker
                    nextTitle='بعدی    '
                    previousTitle='      قبلی          '
                    textStyle={{color : 'white'}}
                    onDateChange={this.onDateChange}/>
                <View>
                <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({show2 : 1,date2 : hi2})]}><Text>{hi2}</Text></Button>
                </View>
            </Content>
                <Footer>
                <FooterTab>
                <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({show2 : 1,date2 : hi2})]}>
                    <Text>ثبت تاریخ مورد نظر</Text>
                </Button>
                </FooterTab>
                </Footer>
       </Container>
);
}
    renderLightbox() {
        const {show,topic,content} = this.props ;
        return (
            <View style = {styles.container}>
               <Text style={{marginBottom : 0,marginTop : 20,fontSize : 20,color : 'white',}}>{topic}</Text>
               <Text  style={lightBoxStyle.contentStyle1}>{content}</Text>
                {show == 18?this._show_date() : null}
                {show == 19?this._show_date2() : null}
                {show == 14? <Text style={lightBoxStyle.contentStyle11}>خروج از برنامه</Text> : null}
                {show == 14?  <Button full key='1' onPress={()=>this.logOut()} style={lightBoxStyle.contentStyle1}><Text style={{fontSize : 18}}>خروج از برنامه</Text></Button> : null}
                <Button transparent style = {{ position : 'absolute', top : 0 , left : 0,}} onPress={() => Actions.pop() }>
                    {show == 18?null : <Icon name='md-close-circle' style={{ fontSize : 30 , color : 'cyan'}}/>}
                </Button>
            </View>
        )
    }
    render() {
        return (
            <View style={lightBoxStyle.container}>
                {this.renderLightbox()}
            </View>            
        )
    }
    async logOut() {
        try {
            let json, response, apiToken = await AsyncStorage.getItem('apiToken');
             response = await fetch('http://192.168.157.2:8000/api/v1/log_out', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    api_token:apiToken,
                })
            });
             json = await response.json();
            console.log(json);
            if(json.code == 200){
                AsyncStorage.removeItem('apiToken');
                Actions.replace('loginPage');
                Actions.lightbox({show : 15})
            }
        } catch(error) {
            console.log(error);
        }
      }
}
const styles = StyleSheet.create({
    container : {
     width : 330 ,
     height : 270,
     justifyContent : 'center',
     alignItems : 'center',
     backgroundColor : '#3c6382',
     borderRadius : 10
    }
})