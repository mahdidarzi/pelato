import React from 'react';
import {Animated,Dimensions,View,StyleSheet,AsyncStorage} from 'react-native';
import { Button, Text ,Icon,Content,FooterTab,Footer,Container} from 'native-base';
import { Actions } from 'react-native-router-flux';
const {width:devicewidth ,height:deviceheight}=Dimensions.get('window');
const PersianCalendarPicker = require('react-native-persian-calendar-picker');
var moment = require('moment-jalaali')

// moment().format('jYYYY/jM/jD');
 export default class lightbox extends React.Component {
    constructor(props) {
        super(props);
 
    this.state = {
      selectedStartDate: null,
     date1:'',
     date2:'',

    };
 
        this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
   
    const { selectedStartDate,test } = this.state;
    const startDate = date ? moment(date).format('jYYYY-jM-jD').toString() : '';
    this.setState({ selectedStartDate: date ? moment(date).format('jYYYY-jM-jD').toString() : '' });
    
    console.log('h'+startDate);
    
  }
_show_date(){
    const { selectedStartDate,test } = this.state;
    const hi=selectedStartDate ;
    return (
        <Container style={{ backgroundColor: 'rgba(52,52,52,.5)'}}>
        <Content>
        <PersianCalendarPicker
        nextTitle='بعدی    '
        previousTitle='      قبلی          '
        textStyle={{color:'white'}}
          onDateChange={this.onDateChange}
                />
                
 
        <View>
        <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({date1:hi,show:1})]}><Text>{hi}</Text></Button>
        </View>
        </Content>
         <Footer>
         <FooterTab>
           <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({date1:hi,show:1,show2:1,date2:hi})]}>
             <Text>ثبت تاریخ مورد نظر</Text>
           </Button>
         </FooterTab>
       </Footer>
       </Container>
);
}
_show_date2(){
    const { selectedStartDate,test } = this.state;
    const hi2=selectedStartDate ;
    return (
        <Container style={{ backgroundColor: 'rgba(52,52,52,.5)'}}>
        <Content>
        <PersianCalendarPicker
        nextTitle='بعدی    '
        previousTitle='      قبلی          '
        textStyle={{color:'white'}}
          onDateChange={this.onDateChange}
                />
        <View>
        <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({show2:1,date2:hi2})]}><Text>{hi2}</Text></Button>
        </View>
        </Content>
         <Footer>
         <FooterTab>
           <Button onPress={()=>[Actions.pop(),Actions.professionnal_Search({show2:1,date2:hi2})]}>
             <Text>ثبت تاریخ مورد نظر</Text>
           </Button>
         </FooterTab>
       </Footer>
       </Container>
);
}


    _renderLightbox() {
        const {show}=this.props ;
        return (
            <View style={{ width:330 , height:270, justifyContent: 'center' , alignItems: 'center' ,backgroundColor:'#3c6382' , borderRadius : 10}}>
                {show==1? <Text style={{marginBottom:0,marginTop:20,fontSize:20,color:'white',}}>*هدف برنامه*</Text>:null}
                {show==1?<Text  style={styles.content}>  این برنامه با هدف کمک به خانه داران که مسعولیت اشپزی را بر عهده دارند نوشته شده است امیدارم که از برنامه ما راضی  باشید برای ادامه برنامه   علامت ضربدر را لمس کنید</Text>:null}
                {show==2? <Text style={{marginBottom:70,marginTop:0,fontSize:20,color:'white',}}>* پشتیبانی*</Text>:null}
                {(show>=3 && show<14)? <Text style={{marginBottom:70,marginTop:0,fontSize:18,color:'white',}}>* خطا در هنگام وارد کردن اطلاعات*</Text>:null}
                {show==2? <Text style={styles.content}>*09013235579*</Text>:null}
                {show==3? <Text style={styles.content}>لطفا تمام فیلد ها را پر کنید</Text>:null}
                {show==4? <Text style={styles.content}>لطفا فیلد شماره تلفن را پر کنید</Text>:null}
                {show==5? <Text style={styles.content}>لطفا فیلد نام کاربری را پر کنید</Text>:null}
                {show==6? <Text style={styles.content}>این شماره قبلا در سیسیتم ثبت شده است</Text>:null}
                {show==7? <Text style={styles.content}>فیلد شماره تلفن باید 11 رقم باشد</Text>:null}
                {show==8? <Text style={styles.content}>کد معرف شما صحیح نمی باشد</Text>:null}
                {show==9? <Text style={styles.content}>لطفا کد تایید را صحیح وارد نمایید</Text>:null}
                {show==10? <Text style={styles.content}>لطفا کد تایید را وارد نمایید</Text>:null}
                {show==11? <Text style={styles.content}>لطفا اطلاعات خود را وارد نمایید</Text>:null}
                {show==12? <Text style={styles.content}>لطفا به بخش ثبت نام مراجه کنید</Text>:null}
                {show==13? <Text style={styles.content}>لطفا شماره تلفن خود را صحیح وارد کنید</Text>:null}
                {show==15? <Text style={styles.content}>خروج شما با موفقیت انجام شد</Text>:null}
                {show==14? <Text style={styles.content1}>خروج از برنامه</Text>:null}
                {show==14?  <Button full key='1' onPress={()=>this.log_out()} style={styles.content}><Text style={{fontSize:18}}>خروج از برنامه</Text></Button>:null}
                {show==16? <Text style={styles.content}>کاربر عزیز هیچ زیر مجموعه ای برای شما وجود ندارد</Text>:null}
                {show==17? <Text style={styles.content}>کاربر عزیز هیچ اتاقی وجود ندارد در این زمان</Text>:null}
                {show==20? <Text style={styles.content}>کاربر عزیز هیچ زمانی برای رزرو وجود ندارد</Text>:null}
                {/* {show==18? this._show_date():null} */}
                {show==18?this._show_date():null}
                {show==19?this._show_date2():null}
                {/* {children} */}
               {/* for exit */}
                <Button transparent style={{ position: 'absolute', top : 0 , left : 0,}} onPress={() => Actions.pop() }>
                    {show==18?null:<Icon name='md-close-circle' style={{ fontSize : 30 , color : 'cyan'}}/>}
                    
                </Button>
            </View>

        )
    }

    render() {
    //     const { selectedStartDate } = this.state;
    // // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    //     const startDate = selectedStartDate ? moment(selectedStartDate).format('jYYYY-jM-jD').toString() : '';
    //     const startDatem = selectedStartDate ? moment(selectedStartDate).format('YYYY-M-D').toString() : '';
        return (
          
            <View style={styles.container}>

                {this._renderLightbox()}

                </View>


            
        )
    }
    async log_out() {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
      console.log(apiToken);
            let response = await fetch('http://192.168.157.2:8000/api/v1/log_out', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    api_token:apiToken,
                    
                })
            });
           
            let json = await response.json();
            console.log(json);
            if(json.code==200){
                AsyncStorage.removeItem('apiToken');
                Actions.replace('login2');
                Actions.lightbox({show:15})
            }
            // we can use of response.code
           
      
        } catch(error) {
            console.log(error);
        }
      }

}


const styles = StyleSheet.create({
    container : {
        backgroundColor: 'rgba(52,52,52,.5)',
        
        position: 'absolute',
        top : 0 ,
        bottom : 0,
        left : 0,
        right : 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        marginRight:20,marginLeft:20,padding:25,marginBottom:70,lineHeight:24,color:'white',lineHeight:30,  backgroundColor:'#34495e',borderRadius:10,borderWidth:1,borderColor:'white'
    },
    content1:{
        marginRight:20,marginLeft:20,padding:25,marginBottom:70,lineHeight:24,color:'white',lineHeight:30,borderRadius:10
    }
})