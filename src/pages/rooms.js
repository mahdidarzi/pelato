import React from 'react';
import { AsyncStorage , FlatList ,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,Body} from 'native-base';
import { Actions } from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
var moment = require('moment-jalaali')
moment().format('jYYYY/jM/jD');
import headerStyles from './../assets/styles/header'
export default class rooms extends React.Component {
    constructor(props){
        super(props);
        this.arrayholder = [ ];
        this.state = {
          total:0,
            show_search:0,
            show_spiner:0,
            show:' ',
            show_h:0,
            content:[],
            rooms : [],
            page : 1,
            loading : true,
            refreshing : false,
            date:'',
            fakedate:this.props.fakedaterr,
            array:[],
            c1:'green',
            c2:'green',
            c3:'green',
            c4:'green',
            c5:'green',
            c6:'green',
            c7:'green',
            c8:'green',
            c9:'green',
            c10:'green',
            c11:'green',
            c12:'green',
            c13:'green',
            c14:'green',
            c15:'green',
            c16:'green',
            c17:'green',
            c18:'green',
            c19:'green',
            c20:'green',
            c21:'green',
            c22:'green',
            c23:'green',
            c24:'green',
            
            
        }
       
    }
    componentWillMount() {
        setTimeout(()=>console.log('r'+this.state.content),2000)
        this.getProductRequest();
        this. getProductRequestf();
       setTimeout( () => {
           if(this.state.rooms.length==0){
            Actions.lightbox({show:17})
           }
         },3000);
      

         
         console.log(this.state.array);
       
        //  console.log(this.filterme([{'id':'1','name':'n'},{'id':'2'}],1));
    }
   
    
    render() {
        const {show} = this.state;
      var s=this.state.date.slice( 0,8)+ parseInt(this.state.date.substr(8));
      var y1=parseInt(this.state.date.substr(8))+1;
      var y=this.state.date.slice( 0,8)+y1;
        var d1=parseInt(this.state.date.substr(8))+2;
      var d=this.state.date.slice( 0,8)+d1;
        var s1=parseInt(this.state.date.substr(8))+3;
      var se=this.state.date.slice( 0,8)+s1;
        var ch1=parseInt(this.state.date.substr(8))+4;
      var ch=this.state.date.slice( 0,8)+ch1;
       var p1=parseInt(this.state.date.substr(8))+5;
      var p=this.state.date.slice( 0,8)+p1;
       var g1=parseInt(this.state.date.substr(8))+6;
      var g=this.state.date.slice( 0,8)+g1;
      var {c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,content}=this.state;
      // console.log(this.state.rooms.length);
      // console.log(this.state.rooms.length);
      // console.log(this.state.rooms.room_timings)
      // let t1=this.state.rooms.find(x=>x.start_hour=='1')
      // console.log(t1+'kj')
      // var myArray = [
      //   {'id':'73','foo':'bar'},
      //   {'id':'45','foo':'bar'}];
      //   var hi =[
      //     this.state.rooms.filter((x) => x.name == 's') 
      //   ];
        // console.log(hi[0].name)
          // var aaa=myArray.filter((x) => x.id === '1');
          // console.log('ss'+aaa[0]);
          // console.log(this.state.rooms.name+'s');
          // console.log(this.state.rooms.id+'s');
          // console.log(this.state.array);
      return (
       <Container style={{ backgroundColor : '#34495e'}}>
         
         <Header   style = {headerStyles.headersbackground} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                       <Left style={headerStyles.headerLeftStyle1}>
                        <Icon  name="md-menu" onPress={() => Actions.drawerOpen() } style={headerStyles.drawerStlye}/>
                    </Left> 
                    <Left style={headerStyles.headerLeftStyle2}>
                    <Image  source={require('./../assets/image/pelatos.png')}  style={styles.backgroundImage}/>
                    </Left> 
                       <Body style={headerStyles.body}><Text style={headerStyles.bodyText}> پنل کاربری پلاتو</Text></Body>
                    <Left style={headerStyles.headerLeftStyle3}>
                          <View  style={headerStyles.personIconView}>
                   <Icon  name='person'   style={headerStyles.iconPerson}/>
                       </View>
                    </Left> 
                      
                </Header>
                
                
                
                
      {this.state.show_search==1?<Text Style={{color:'white'}}> مرکز یافت نشد</Text>:null}
      <View key='serach' style={{alignItems:'center',marginTop:10,marginBottom:20,height:5,marginLeft:40,marginRight:40,marginBottom:30}}>
             <Item style={{height:35,width:200,padding:5,}} rounded style={{backgroundColor:'white'}}>
          <Icon  name="ios-search" />
          <Input style={{height:35,width:250,  alignItems: 'center',padding:5}} onChangeText={text => this.searchFilterFunction(text)} placeholder='جستحوی مرکز'  value={this.state.value}/>
        </Item>
        </View>
      {this.state.show_h==1?[ <View key='sh1' style={{flexDirection:'row',alignItems:'center',marginLeft:50,marginTop:20}}>
      <Button style={{borderRadius:-1}}  onPress={()=>this.state.content.length>0?Actions.factor({factor:this.state.content}):alert('لطفا زمان خود را انتخاب کنید')}><Text>مشاهده ی فاکتور</Text></Button>
               <Button style={{borderRadius:-1}}  onPress={()=>this.setState({show:'timing'})}><Text>مشاهده ی زمان بندی</Text></Button>
      </View>,
         <View style={{marginTop:-2}} View key='sh2'  style={{flexDirection:'row',marginLeft:10,marginRight:10}}>
            
               <Button style={{borderRadius:-1}}  onPress={()=>this.setState({show:'description'})}><Text>توضیحات</Text></Button>
               <Button style={{borderRadius:-1}}  onPress={()=>Actions.factor({factor:this.state.content})}><Text> های اتاق پست</Text></Button>
               <Button style={{borderRadius:-1}}  onPress={()=>Actions.factor({factor:this.state.content})}><Text>نظرات</Text></Button>
               <Button style={{borderRadius:-1}}  onPress={()=>Actions.factor({factor:this.state.content})}><Text>امتیاز دهی</Text></Button>
              
               </View>, 
              ]:null}
     
       
             
                <FlatList 
                

                    ListEmptyComponent={() =>this.state.show_spiner==0?<Spinner/>:null}
                //    ListFooterComponent={this.state.loading?null:< Spinner />}
                ListFooterComponent={this.renderFooter.bind(this)}
                   refreshing={this.state.refreshing}
                   onRefresh={this.handleRefresh.bind(this)}
                   onEndReached={this.handleLoadMore.bind(this)}
                   onEndReachedThreshold={0.7}
                    data={this.state.rooms}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=>
                  
                    <View  key={item.id.toString()}  style={styles.container}>
        <View style={{  borderWidth: 3,
        borderColor:'white',
        borderRadius:8
    }}>
     
                    <ImageSlider  style={styles.image} images={[
                        item.images.length==0?null:item.images[0].picture,
                        item.images.length<=1?null:item.images[1].picture, 
                        item.images.length<=2?null:item.images[2].picture,                              
                            ]}
                                         autoPlayWithInterval={2000}/>
                                         </View>
                                         <View style={{background:"black"}}>
                                         <View style={{justifyContent:'center',alignItems:'center'}}><Text>{item.name}</Text></View>
                                         <Text>اندازه ی اتاق:{item.size}</Text>
                                         <Text>جنس دیوار:{item.wall_type}</Text>
                                         <Text>جنس کف:{item.floor_type}</Text>
                                         <ScrollView style={styles.property}>
                         <Text style={[styles.body,{color:'white'}]}>ویژگی ها</Text>
                         <View style={{flexDirection:'row'}}>
                        {item.center_attribute.length>=1?<Text style={styles.text_pro}>{item.center_attribute[0].name}</Text>:null}
                        {item.center_attribute.length>=2?<Text style={styles.text_pro}>{item.center_attribute[1].name}</Text>:null}
                        {item.center_attribute.length>=3?<Text style={styles.text_pro}>{item.center_attribute[2].name}</Text>:null}
                        {item.center_attribute.length>=4?<Text style={styles.text_pro}>{item.center_attribute[3].name}</Text>:null}
                        {item.center_attribute.length>=5?<Text style={styles.text_pro}>{item.center_attribute[4].name}</Text>:null}
                         </View>
                         <View style={{flexDirection:'row'}}>
                         {item.center_attribute.length>=6?<Text style={styles.text_pro}>{item.center_attribute[5].name}</Text>:null}
                         {item.center_attribute.length>=7?<Text style={styles.text_pro}>{item.center_attribute[6].name}</Text>:null}
                         {item.center_attribute.length>=8?<Text style={styles.text_pro}>{item.center_attribute[7].name}</Text>:null}
                         {item.center_attribute.length>=9?<Text style={styles.text_pro}>{item.center_attribute[8].name}</Text>:null}
                         {item.center_attribute.length>=10?<Text style={styles.text_pro}>{item.center_attribute[9].name}</Text>:null}
                         </View>

                         </ScrollView>

                                  {/* {1<0? [this.state.array=item.room_timings.find((x)=> x.start_hour ==1),console.log(this.state.array)]:console.log(item.room_timings.find((x)=> x.start_hour==10))}    */}
                                  {show=='description'?<Text style={{marginTop:15,marginBottom:15,marginLeft:10,marginRight:10}}>{this.props.description}</Text>:null}
                                  {( this.props.date== s && show=='timing')?
                                  [
                                    
                                   
                                    <Button key='1'  style={styles.buttontop}><Text style={{marginLeft:60,marginRight:60}}>برنامه زمان بندی صبح</Text></Button>,
                                    <View key='2'  style={styles.Viewes}>
                                    { item.room_timings.find((x)=> x.start_hour =='0-1')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?c1=='green'?[this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour,date:s}),this.total(item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price)]:this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id)):alert('این زمان رزرو شده است'),this.setState ({c1:c1=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?c1:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour}</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=> Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='1-2')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].day==0?<TouchableOpacity activeOpacity={1} onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?c2=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id)):alert('این زمان رزرو شده است'),this.setState ({c2:c2=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?c2:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='2-3')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?c3=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id)):alert('این زمان رزرو شده است'),this.setState ({c3:c3=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?c3:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='3-4')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?c4=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id)):alert('این زمان رزرو شده است'),this.setState ({c4:c4=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?c4:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='4-5')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?c5=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id)):alert('این زمان رزرو شده است'),this.setState ({c5:c5=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?c5:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='5-6')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?c6=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id)):alert('این زمان رزرو شده است'),this.setState ({c6:c6=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?c6:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                    
</View>,
<View key='3'  style={styles.Viewes}>
                                      { item.room_timings.find((x)=> x.start_hour =='6-7')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?c7=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id)):alert('این زمان رزرو شده است'),this.setState ({c7:c7=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?c7:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='7-8')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?c8=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id)):alert('این زمان رزرو شده است'),this.setState ({c8:c8=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?c8:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='8-9')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?c9=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id)):alert('این زمان رزرو شده است'),this.setState ({c9:c9=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?c9:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='9-10')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?c10=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id)):alert('این زمان رزرو شده است'),this.setState ({c10:c10=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?c10:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     { item.room_timings.find((x)=> x.start_hour =='10-11')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?c11=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id)):alert('این زمان رزرو شده است'),this.setState ({c11:c11=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?c11:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }
                                     {/* { item.room_timings.find((x)=> x.start_hour =='10-11')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==0?<Button onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?c11=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id)):alert('این زمان رزرو شده است'),this.setState ({c11:c11=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?c11:'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text></Button>:<Button onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></Button>
                                    :<Button onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text>em</Text></Button>
                                    } */}
                                    
                                     { item.room_timings.find((x)=> x.start_hour =='11-12')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?c12=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id)):alert('این زمان رزرو شده است'),this.setState ({c12:c12=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?c12:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }                           
</View>,
<Button key='4' style={styles.buttontop}><Text >            برنامه زمان بندی بعد از ظهر</Text></Button>,
<View key='5'  style={styles.Viewes}>
                                    { item.room_timings.find((x)=> x.start_hour =='12-13')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?c13=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id)):alert('این زمان رزرو شده است'),this.setState ({c13:c13=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?c13:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }    
                                      { item.room_timings.find((x)=> x.start_hour =='13-14')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?c14=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id)):alert('این زمان رزرو شده است'),this.setState ({c14:c14=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?c14:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }    
                                      { item.room_timings.find((x)=> x.start_hour =='14-15')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?c15=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id)):alert('این زمان رزرو شده است'),this.setState ({c15:c15=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?c15:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }    
                                      { item.room_timings.find((x)=> x.start_hour =='15-16')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?c16=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id)):alert('این زمان رزرو شده است'),this.setState ({c16:c16=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?c16:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }    
                                      { item.room_timings.find((x)=> x.start_hour =='16-17')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?c17=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id)):alert('این زمان رزرو شده است'),this.setState ({c17:c17=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?c17:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }    
                                      { item.room_timings.find((x)=> x.start_hour =='17-18')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?c18=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id)):alert('این زمان رزرو شده است'),this.setState ({c18:c18=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?c18:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }    
</View>,
<View key='6'  style={styles.Viewes}>
                                { item.room_timings.find((x)=> x.start_hour =='18-19')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?c19=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id)):alert('این زمان رزرو شده است'),this.setState ({c19:c19=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?c19:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }   
                                     { item.room_timings.find((x)=> x.start_hour =='19-20')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?c20=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id)):alert('این زمان رزرو شده است'),this.setState ({c20:c20=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?c20:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }   
                                     { item.room_timings.find((x)=> x.start_hour =='20-21')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?c21=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id)):alert('این زمان رزرو شده است'),this.setState ({c21:c21=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?c21:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }   
                                     { item.room_timings.find((x)=> x.start_hour =='21-22')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?c22=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id)):alert('این زمان رزرو شده است'),this.setState ({c22:c22=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?c22:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }   
                                     { item.room_timings.find((x)=> x.start_hour =='22-23')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?c23=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id)):alert('این زمان رزرو شده است'),this.setState ({c23:c23=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?c23:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }   
                                     { item.room_timings.find((x)=> x.start_hour =='23-24')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].day==0?<TouchableOpacity onPress={()=>[item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?c24=='green'?this.add({id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id,price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].price,name:item.name,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour,date:s}):this.delete(content.findIndex((x)=> x.id==item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id)):alert('این زمان رزرو شده است'),this.setState ({c24:c24=='green'?'yellow':'green'})] } style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?c24:'red'},styles.Button]}><Text style={styles.fontsize}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour}</Text><Text style={styles.money}>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].price/1000}تومان</Text></TouchableOpacity>:<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    :<TouchableOpacity onPress={()=>Actions.lightbox({show:20})} style={styles.Buttonempty}><Text></Text></TouchableOpacity>
                                    }                                        
</View>,
]:null}

     { this.props.date== y?[
      <Button  style={styles.buttontop}><Text >            برنامه زمان بندی صبح</Text></Button>,
<Text key>y</Text>,
<View key style={styles.Viewes}>

 { item.room_timings.find((x)=> x.start_hour =='0-1') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='0-1') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}


 { item.room_timings.find((x)=> x.start_hour =='1-2')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='1-2') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='2-3')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-31')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour ==3) && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==3)].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==3)].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==3)].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==3)].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==3)].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='3-4') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='3-4') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='4-5') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='4-5') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='5-6') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='5-6') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='6-7') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='6-7') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==10)].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='7-8') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='7-8') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='8-9') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour ==10) && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
 
 {/* mahdi */}
{ item.room_timings.find((x)=> x.start_hour =='9-10')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='9-10') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='10-11')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='10-11') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='11-12') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='11-12') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}



</View>,
<Button key style={styles.buttontop}><Text >            برنامه زمان بندی بعد از ظهر</Text></Button>,
<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='12-13')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='12-13') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='13-14')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='13-14') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='14-15')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='14-15') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='15-16')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='15-16') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='16-17')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='16-17') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
{ item.room_timings.find((x)=> x.start_hour =='17-18')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='17-18') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='18-19')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='18-19') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='19-20')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='19-20') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='20-21')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='20-21') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour,n:item.name,date:y ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='21-22')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='21-22') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='22-23')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='22-23') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='23-24')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].day==1?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='23-24') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour,n:item.name,date:y,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,

     ]:null}

 { this.props.date== d?[
  <Text key>d</Text>,
  <Button key style={styles.buttontop}><Text >                   برنامه زمان بندی صبح</Text></Button>,
<View key style={styles.Viewes}>

 { item.room_timings.find((x)=> x.start_hour =='0-1') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='0-1') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}


 { item.room_timings.find((x)=> x.start_hour =='1-2')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='1-2') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='2-3')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='2-3') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='3-4') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='3-4') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='4-5') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='4-5') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='5-6') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='5-6') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='6-7') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='6-7') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==10)].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='7-8') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='7-8') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='8-9') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour ==10) && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
 
 {/* mahdi */}
{ item.room_timings.find((x)=> x.start_hour =='9-10')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='9-10') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='10-11')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='10-11') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='11-12') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='11-12') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}



</View>,
<Button key style={styles.buttontop}><Text >            برنامه زمان بندی بعد از ظهر</Text></Button>,
<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='12-13')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='12-13') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='13-14')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='13-14') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==14)].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='14-15')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='14-15') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='15-16')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='15-16') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='16-17')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='16-17') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
{ item.room_timings.find((x)=> x.start_hour =='17-18')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='17-18') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='18-19')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='18-19') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='19-20')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='19-20') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='20-21')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='20-21') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='21-22')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='21-22') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='22-23')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='22-23') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour,n:item.name,date:d ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='23-24')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].day==2?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='23-24') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour,n:item.name,date:d,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,
 ]:null}                              


 { this.props.date== se?[
  <Text key>se</Text>,
  <Button key style={styles.buttontop}><Text >                   برنامه زمان بندی صبح</Text></Button>,
<View key style={styles.Viewes}>

 { item.room_timings.find((x)=> x.start_hour =='0-1') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='0-1') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==1)].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==1)].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}


 { item.room_timings.find((x)=> x.start_hour =='1-2')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='1-2') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='2-3')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='2-3') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='3-4') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='3-4') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour,n:item.name,date:se ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='4-5') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='4-5') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour,n:item.name,date:se ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='5-6') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='5-6') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='6-7') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='6-7') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==10)].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='7-8') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='7-8') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='8-9') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour ==10) && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
 
 {/* mahdi */}
{ item.room_timings.find((x)=> x.start_hour =='9-10')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='9-10') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='10-11')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='10-11') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,n:item.name,date:se ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='11-12') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='11-12') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}



</View>,
<Button key style={styles.buttontop}><Text >            برنامه زمان بندی بعد از ظهر</Text></Button>,
<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='12-13')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='12-13') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='13-14')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='13-14') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='14-15')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='14-15') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='15-16')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='15-16') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour,n:item.name,date:se ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='16-17')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='16-17') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour,n:item.name,date:se ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
{ item.room_timings.find((x)=> x.start_hour =='17-18')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='17-18') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='18-19')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='18-19') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='19-20')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='19-20') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='20-21')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='20-21') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour,n:item.name,date:se ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='21-22')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='21-22') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='22-23')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='22-23') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='23-24')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].day==3?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='23-24') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour,n:item.name,date:se,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,
 ]:null}

 { this.props.date== ch?[
  
   <Text key> ch</Text>,
   <Button key style={styles.buttontop}><Text >                   برنامه زمان بندی صبح</Text></Button>,
   <View key style={styles.Viewes}>
   
    { item.room_timings.find((x)=> x.start_hour =='0-1') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='0-1') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   
    { item.room_timings.find((x)=> x.start_hour =='1-2')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='1-2') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='2-3')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='2-3') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='3-4') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='3-4') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='4-5') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='4-5') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='5-6') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='5-6') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   </View>,
   
   <View key style={styles.Viewes}>
   
   { item.room_timings.find((x)=> x.start_hour =='6-7') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='6-7') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==10)].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='7-8') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='7-8') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='8-9') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour ==10) && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
    
    {/* mahdi */}
   { item.room_timings.find((x)=> x.start_hour =='9-10')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='9-10') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='10-11')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='10-11') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='11-12') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='11-12') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   
   
   </View>,
   <Button key style={styles.buttontop}><Text >            برنامه زمان بندی بعد از ظهر</Text></Button>,
   <View key style={styles.Viewes}>
   
   { item.room_timings.find((x)=> x.start_hour =='12-13')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='12-13') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='13-14')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='13-14') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='14-15')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='14-15') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='15-16')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='15-16') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='16-17')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='16-17') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   { item.room_timings.find((x)=> x.start_hour =='17-18')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='17-18') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   </View>,
   
   <View key style={styles.Viewes}>
   
   { item.room_timings.find((x)=> x.start_hour =='18-19')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='18-19') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='19-20')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='19-20') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='20-21')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='20-21') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='21-22')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='21-22') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour,n:item.name,date:ch,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='22-23')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='22-23') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   { item.room_timings.find((x)=> x.start_hour =='23-24')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].day==4?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='23-24') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour,n:item.name,date:ch ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   :<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
   }
   
   </View>,

 ]:null}



 { this.props.date== p?[
  <Text key>p</Text>,
  <Button key style={styles.buttontop}><Text >                   برنامه زمان بندی صبح</Text></Button>,
  
<View key style={styles.Viewes}>

 { item.room_timings.find((x)=> x.start_hour =='0-1') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='0-1') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}


 { item.room_timings.find((x)=> x.start_hour =='1-2')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='1-2') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='2-3')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='2-3') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='3-4') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='3-4') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='4-5') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='4-5') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='5-6') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='5-6') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='6-7') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='6-7') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==10)].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='7-8') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='7-8') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='8-9') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour ==10) && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
 
 {/* mahdi */}
{ item.room_timings.find((x)=> x.start_hour =='9-10')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='9-10') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='10-11')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='10-11') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='11-12') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='11-12') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}



</View>,
<Button key style={styles.buttontop}><Text >            برنامه زمان بندی بعد از ظهر</Text></Button>,
<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='12-13')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='12-13') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='13-14')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='13-14') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='14-15')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='14-15') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='15-16')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='15-16') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='16-17')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='16-17') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
{ item.room_timings.find((x)=> x.start_hour =='17-18')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='17-18') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='18-19')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='18-19') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='19-20')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='19-20') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='20-21')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='20-21') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='21-22')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='21-22') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='22-23')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='22-23') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour,n:item.name,date:p,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour ==24)?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==24)].day==5?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour ==24) && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==24)].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==24)].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==24)].start_hour,n:item.name,date:p ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==24)].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==24)].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,
 ]:null}

 { this.props.date== g?[
  <Text key>g</Text>,
  <Button key style={styles.buttontop}><Text >                   برنامه زمان بندی صبح</Text></Button>,
<View key style={styles.Viewes}>

 { item.room_timings.find((x)=> x.start_hour =='0-1') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='0-1') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='0-1')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}


 { item.room_timings.find((x)=> x.start_hour =='1-2')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='1-2') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='1-2')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='2-3')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='2-3') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='2-3')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='3-4') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='3-4') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='3-4')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='4-5') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='4-5') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='4-5')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='5-6') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='5-6') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='5-6')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='6-7') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='6-7') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour ==10)].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='6-7')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='7-8') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='7-8') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='7-8')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='8-9') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='8-9') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='8-9')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
 
 {/* mahdi */}
{ item.room_timings.find((x)=> x.start_hour =='9-10')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='9-10') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='9-10')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='10-11')  ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='10-11') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='10-11')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='11-12') ?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='11-12') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='11-12')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}



</View>,
<Button key style={styles.buttontop}><Text >        برنامه زمان بندی بعد از ظهر</Text></Button>,
<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='12-13')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='12-13') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='12-13')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='13-14')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='13-14') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='13-14')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='14-15')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='14-15') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='14-15')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='15-16')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='15-16') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='15-16')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='16-17')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='16-17') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='16-17')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}
{ item.room_timings.find((x)=> x.start_hour =='17-18')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='17-18') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='17-18')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,

<View key style={styles.Viewes}>

{ item.room_timings.find((x)=> x.start_hour =='18-19')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='18-19') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='18-19')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button  onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='19-20')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='19-20') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='19-20')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='20-21')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='20-21') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='20-21')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='21-22')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='21-22') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='21-22')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='22-23')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='22-23') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour,n:item.name,date:g,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].id }) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='22-23')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

{ item.room_timings.find((x)=> x.start_hour =='23-24')?item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].day==6?<Button onPress={()=> item.room_timings.find((x)=> x.start_hour =='23-24') && item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?Actions.factor({price:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].price,time:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour,n:item.name,date:g ,id:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].id}) :alert('empty1')} style={[{backgroundColor:item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].selled==0?'green':'red'},styles.Button]}><Text>{item.room_timings[item.room_timings.findIndex((x)=> x.start_hour =='23-24')].start_hour}</Text></Button>:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
:<Button onPress={()=>alert('زمانی برای رزرو وجود ندارد')} style={styles.Buttonempty}><Text>em</Text></Button>
}

</View>,
 ]:null}



  



                                    {/* <Text>  {item.room_timings.find((x)=> x.start_hour ==222)}  </Text>

                                    <Text>  {item.room_timings.findIndex((x)=> x.start_hour ==1)}  </Text>
                                    {1>2?null:console.log(this.filterme(item.room_timings))  } */}
                                    
                                        
                                       
                                         {/* <Text>{item.room_timings.id}.filter(x => x.id == '1')</Text>
                                         {1>0?<Text>{item.room_timings[0].id}</Text>:null}
                                          */}
                                         


</View>
</View>
                }
                />

            </Container>
            
        )
    }
    filterme(array){
      var r=array.findIndex((x)=> x.start_hour ==1);
      // return r.id
      // let m=.find(x => x.id === '45');
      console.log(r+'sssss')
    }
  
    // let response =  fetch(`http://192.168.88.2:8000/api/v1/pelato/${this.props.id}?page=${page}`);
    handleRefresh() {
        this.setState({ page : 1 , refreshing : true } , () => {
            this.getProductRequest();
        })
    }


    renderFooter() {
       
        if(this.state.loading) return null;

        return <Spinner/>
    }

    handleLoadMore() {
        if(this.state.rooms.length > 0) {
            this.setState({page : this.state.page + 1 , loading : true}, () => {
                this.getProductRequest()
            })
        }
    }
    async getProductRequestf() {
        
        try {
            const { page } = this.state;
            var urls=[
                // `http://192.168.88.2:8000/api/v1/weeks_full/1/2019-02-08`,
                `http://192.168.88.2:8000/api/v1/weeks/${this.props.id}/${this.props.datem}/?page=${page}`
            ]
          
            let response = await fetch(urls);
            let json = await response.json();
          
            // var rooms = json.data1;
            // this.arrayholder =  json.data1;
            this.arrayholder =  json.data1.data;
            console.log(json.data);
            console.log(rooms);
           
        } catch(error) {
            console.log(error)
        }
    }
    async getProductRequest() {
        try {
            const { page } = this.state;
            await this.setState({ loading : true});
            // let response = await fetch(`http://192.168.88.2:8000/api/v1/weeks/${this.props.id}/${this.props.datem}/?page=${page}`);
            let response = await fetch(`http://192.168.88.2:8000/api/v1/weeks/${this.props.id}/${this.props.datem}/?page=${page}`);
            // http://192.168.88.2:8000/api/v1/weeks/1/2019-04-01?page=1

            console.log(response.status)
            if(response.status==500){
                Actions.lightbox({show:17})
            }

            if(response.status==200){
                let json = await response.json();
                let rooms = json.data1.data;
                let persiandate=json.data2.start_date;

                if(rooms.length > 0) {
                    this.setState(prevState => {
                        
                        return {
                            
                            rooms : page === 1 ? rooms : [...prevState.rooms , ...rooms],
                            page : json.data1.current_page,
                            refreshing : false,
                            loading:false,
                            show_h:1,
                            
                            // date:json.data2.start_date,
                            date:moment(persiandate).format('jYYYY-jM-jD').toString(),
                            
                            
                        }
                        })
                }
            }
        } catch(error) {
            console.log(error)
        }
         
      
        
    }
    total(price){
      let total=0;
      total +=price;
      this.setState({total:total})
     console.log(this.state.total+'sfsdfsdfh');

    }
    date(){
        const { date } = this.state;
        
        return <Text >{date.slice( 0,8)}{parseInt(date.substr(8))+10}</Text>;
    }
    searchFilterFunction = text => {
        this.setState({
          value: text,
        });
        this.setState({ loading : true});
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item.name}`;
          const textData = text;
          
          return itemData.indexOf(textData) > -1;
         
        });
          setTimeout(() => {
            if (newData.length== 0 && text.length>=1)
        { 
            
            this.setState({show_search:1,show_spiner:1})
        }
        else{
            this.setState({show_search:0,show_spiner:0})
        }
            
              
        }, 5000)
        this.setState({
            rooms: newData,
        });
      
      };
     
    delete(pos){
        // item.room_timings.findIndex((x)=> x.start_hour =='23-24'
        var arr=this.state.content;
        console.log(arr);
      //  var pos= arr.findIndex((x)=> x.id==2);
        console.log(pos);
        arr.splice(pos,1);
        // this.setState({test1:arr});
        console.log(this.state.content);
    
       }
    
       add({id,price,date,time,name}){
        // item.room_timings.findIndex((x)=> x.start_hour =='23-24'
        var arradd=this.state.content;
        console.log(arradd);
      //  var pos= arr.findIndex((x)=> x.id==2);
        
      arradd.push({id,price,date,time,name});
        // this.setState({content:arradd});
        console.log(this.state.content);
    
       }
}

   
const styles=StyleSheet.create({
    container:{
        backgroundColor : 'black',
      flex:1,
    marginBottom:20,
    marginTop:25,
        margin: 5,
        backgroundColor : 'white',
        elevation : 1,
        shadowColor : '#000',
        shadowOffset : { width : 0 , height: 20},
        shadowOpacity : .2,
    
},
image:{
    width : '100%',
        height: 200,
        borderRadius:8
},
Viewes:{
  flexDirection:'row',
  marginBottom:10,
  marginRight:20,
  marginLeft:20,

},
Button:{
    // width:50,
    // height:50,
    // flexDirection:'row',
    marginLeft:2,
    marginRight:2,
    marginTop:5,
    marginBottom:5,
    width:47,
    height:70,
    borderRadius:5,
    // paddingLeft:8,
    // paddingRight:8,
    
  },
  Buttonempty:{
    // width:50,
    // height:50,
    flexDirection:'row',
    marginLeft:3,
    marginRight:3,
    marginTop:5,
    marginBottom:5,
    backgroundColor:'red',
    width:45,
    height:70,
    borderRadius:5,
  },
  buttondaysaweeks:{
   
    marginLeft:-4,
    marginRight:1,
    marginTop:5,
    marginBottom:5,
    
  },
  buttontop:{
   
   
    // marginTop:5,
    marginBottom:1,
    borderRadius:2,
    marginLeft:26,
    marginRight:26,
    width:298,
    height:20,
    alignItems:'center',
    borderColor:'black',
    borderWidth:1,
    
  },
  weeks:{
      width:110,
      height:45,
    // paddingLeft:-10,
    // paddingRight:-10,
    marginLeft:1,
    marginRight:2,
    marginTop:5,
    marginBottom:5, 
  },
  property:{
    width : '100%',
    height: 60,
    marginBottom:5,
    borderRadius : 10,
 
  },
  text_pro:{
    backgroundColor:'blue',
    color:'white',
    marginLeft:5,
    padding:3,
    marginTop:5,
    borderRadius : 5,
  },
  fontsize:{
      fontSize:13,
      width:35,
    color:'black',
    // flexContent:'flex-end',
    marginLeft:13.5,
      borderRadius:2,
      borderWidth:0.5,
      backgroundColor:'white',
      borderColor:'black',
    //   paddingRight:10,
  
  },
  money:{
    fontSize:12,
    flexDirection:'row',
    borderRadius:2,
    borderWidth:0.5,
    backgroundColor:'white',
    borderColor:'black',
    marginLeft:1,
    marginTop:10,
    height:20,
    paddingLeft:0,
    // paddingRight:1,
    
  },
  property:{
    width : '100%',
    height: 100,
    backgroundColor:'#34495e',
    borderRadius : 10,
    borderWidth:1.8,
    borderColor:'white',
 
  },



})
// test
// if(current_date>start_data && current_date>start_data){
    
// }