import React, {Component} from 'react';
import {StyleSheet,FlatList,AsyncStorage,WebView,Image,TouchableOpacity} from 'react-native';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,FooterTab,Footer,Body,Card,CardItem,} from 'native-base';
import { Actions } from 'react-native-router-flux';
import headerStyles from './../assets/styles/header'
export default class factor extends Component {

   constructor(){
     super();
     this.state={
      id:[],
       factor:[this.props ],
       apiToken: null,
       createwallet:0,
       discount:null,
       total:0,
       arrayTest:
       [
           {price:2},
           {price:100}
       ]
      
     }
   }
   componentWillMount(){
       
     setTimeout(()=>{console.log(this.state.id+'nowq'),3000});
     
     AsyncStorage.getItem('apiToken' , (error , apiToken) => this.setState({ apiToken:apiToken }));
   
    
   
     this.total(this.props.factor)+'sss';
    //  console.log('s'+this.state.apiToken);
    //  setTimeout(()=>{console.log('s'+this.state.apiToken),5000});

   }
  render() {
     const {n,time,price,date,id,pricet,test} =this.props;
     const { apiToken,createwallet } = this.state;
     var myArray=this.state.id;
  
    return (
        <Container style={{ backgroundColor : '#2d3436'}}>
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
{/* <Text>{price}</Text>
<Text>{n}</Text>
<Text>{time}</Text>
<Text>{price}</Text>
<Text>{date}</Text>
<Text>{id}</Text> */}
<FlatList
                    data={this.props.factor}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=> 
                  <Card>
                  <CardItem >
                  <Left>
                  <Text>{item.name} </Text>
                  </Left>
                    <Right>
                    <Text>{item.time}</Text>
                    </Right>
                    <Right style={{marginRight:10}}><Text>{item.price}</Text></Right>
                   </CardItem>
                 </Card>
                //  <View><Text >مجموع:{total+=item.price}</Text></View>

}/> 
<FlatList

                    data={this.props.factor}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=> 
                  
                 
                //   {this.setState({total:total+=item.price})}
                <View>
                {/* <Text >مجموع:{total+=item.price}</Text>
                {this.total(total+=item.price)} */}
                  {/* {this.setState({total:total++})} */}
                  </View>
                

}/> 

{createwallet==1?
  <Button onPress={()=>this.requrestLoginFromApi()}>
  <Text>ایجاد کیف پول</Text>
  </Button>:null}
<View style={{flexDirection:'row', marginLeft:30,marginRight:30}}>



  
  
  <TouchableOpacity style={{width:120,height:50,borderWidth:1,borderColor:'green',alignItems:'center',justifyContent:'center',borderWidth:2}} onPress={()=>Actions.wv({room_id:this.state.id,room_name:n,room_price:this.state.total,room_date:date})}>
  <Text style={{color:'white'}}>پرداخت درگاه بانک</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
  <Text style={{color:'white',fontSize:18,borderWidth:1,borderColor:'green'}}>مجموع:{this.state.total}</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{width:120,height:50,borderWidth:1,borderColor:'green',alignItems:'center',justifyContent:'center',borderWidth:2}} onPress={()=>this.requrestFromApi()}>
  <Text style={{color:'white'}}>پرداخت با کیف پول</Text>
  </TouchableOpacity>
  

</View>






 
              
        </Container>
   
   
    );

  }
  total(array){
    var ids=this.state.id;
    console.log(array);
    console.log(array[0].price+'mahdi');
    console.log('mahdi');
    var payment =0;
for (var i=0; i <array.length; i++) {
   payment+=array[i].price;

   ids.push(array[i].id);
  
      
} 

console.log(payment+'last');
this.setState({total:payment,id:ids});
return payment;
console.log(this.state.id+'sadra');


  }
  async requrestFromApi() {
    try {
        let { apiToken,createwallet} = this.state;
        console.log(apiToken);
        let response = await fetch(`http://192.168.88.2:8000/api/v1/checkwallet/${apiToken} `);
        let json = await response.json();
        console.log('when we click on pay by walllet'+json.code);
        if(json.code==422) {

          
        
          console.log(['you dont can', this.setState({createwallet:1 })]);
            
        }
        if(json.code==200){
         
          this.transactionwithwallet();
         
         
          

        }

       
    } catch(error) {
        console.log(error);
    }
}

async requrestFromApiwallet() {
  try {
      let { apiToken,createwallet} = this.state;
      console.log(apiToken);
      let response = await fetch(`http://192.168.88.2:8000/api/v1/createwallet/${apiToken} `);
      
      console.log('wallet'+response.status);
    

     
  } catch(error) {
      console.log(error);
  }
}


async transactionwithwallet() {
  try {
      var {apiToken ,id , discount } = this.state;

      var response = await fetch('http://192.168.88.2:8000/api/v1/wallet', {
          method : 'POST',
          headers : {
              'Accept' : 'application/json',
              'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
     
            api_token:apiToken,
           romtiming_id:`${id}`,
            discount:discount
          })
      });
      let json = await response.json();
      console.log('when we click on pay by wallet and get 200'+json.code);
      if(json.code==200){
          alert('رزرو با موقیت انجام شد');
          Actions.replace('goodest_centers');

      }
      if(json.code==422){
        alert('این اتاق در چند لحظه پیش توسط کاربر دیگر رزرو شده است');
        // Actions.replace('rooms');

    }
    if(json.code==421){
        alert('لطفا کیف پول خود را شارژ کنید');
        // Actions.replace('rooms');

    }

    if(json.code==420){
       createwallet:0
      this.setState({createwallet:1 })
      alert('لطفا کیف پول خود را ایجاد کنید');
      // Actions.replace('rooms');

  }
      console.log(response.status);
  } catch(error) {
      console.log(error);
  }

}



async requrestLoginFromApi() {
  try {
      let { apiToken  } = this.state;

      let response = await fetch('http://192.168.88.2:8000/api/v1/createwallet', {
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
      if(json.code==200){
        this.setState({createwallet:0 })
        alert('کیف پول شما ایجاد شد')
      }
      console.log(json);
      // we can use of response.code
     

  } catch(error) {
      console.log(error);
  }
}

}
