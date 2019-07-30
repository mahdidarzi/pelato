import React from 'react';
import {View, Text, Item, Icon,Container,Header,Content,Button,Left,Right,Body,FooterTab,Footer} from 'native-base';
import {Image,AsyncStorage,TextInput,StyleSheet,WebView} from "react-native";
import { Actions } from 'react-native-router-flux';
import headerStyles from './../assets/styles/header'
export default class wallet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wallet_amount:0, 
            apiToken: null,
            an:null,
            show:0,
            message:' ',
            price:'',
            priceShow:0,
            showVebView:0,
        }
    }
    componentWillMount() {
        this.print();
        // this.get_wallet();
        AsyncStorage.getItem('apiToken' , (error , apiToken) => this.setState({ apiToken:apiToken }))
       
    
    }
    render() {
        return (
            <Container style={{ backgroundColor : '#2d3436'}} >
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
                   <Content>
                      
                   <Text style={{justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'green'}}>
                      
                       <Text style={{color:'white',fontSize:20,marginTop:20,marginLeft:60}}>موجودی شما:{this.state.wallet_amount}تومان می باشد</Text>
                     
                   </Text>
                   {this.state.show==1?
                         <Button   onPress={()=>this.create_wallet()}>
                              <Text>ایجاد کیف پول</Text>
                         </Button>
                        :null}
{/* <Text style={{color:'white',right:0}}>{this.state.message}:موحودی شما</Text> */}

{this.state.priceShow==1?
    <View style={{justifyContent:'center',alignItems:'center'}}> 
<TextInput 
               placeholder='            لطفا مبلغ  مورد نظر را وارد کنید'
               style={styles.textinput}
               onChangeText={(price)=> this.setState({price})}
               secureTextEntry
               
              />
</View>
:null}

 {this.state.showVebView==1?<View>{this.chargewallet()}</View>:null}

 
                       </Content>
                       <Footer >
          <FooterTab style={{ backgroundColor : '#34495e',justifyContent:'center',alignItems:'center'}}>
          <View >
                       <Button style={{borderColor:'green',backgroundColor:'green',borderWidth:2,borderColor:'white',borderRadius:5,}} success full  onPress={()=>this.state.priceShow==0?this.setState({priceShow:1}): Actions.wv({forWallet:1,price:this.state.price,apiToken:this.state.apiToken})}>
                              <Text style={{fontSize:20}}> شارژ کیف پول </Text>
                         </Button>
                           </View>
          </FooterTab>
        </Footer>
                       
            </Container>
        )
    }
   
  
    async get_wallet(api_token) {
       
        try {
            let { apiToken,an } = this.state;

        var response = await fetch('http://192.168.88.2:8000/api/v1/wallet_amount', {
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
 if(json.data!='empty'){
    let amount=json.data[0].wallet_sum;
    this.setState({
       wallet_amount:amount
       
     });
 }
 if(json.data=='empty'){
    this.setState({ show:1  }); 
  
 }
 console.log(json.data)
//  if(){
     
//  }
 
        } catch(error) {
            console.log(error)
        }
        
        
    }
    async chargewallet() {
      
        
      

        let { apiToken,price } = this.state;
        console.log(apiToken);
        let response = await fetch('http://192.168.88.2:8000/api/v1/createwallet', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                price:this.state.price,
                api_token:apiToken
                
            })
        });
            let json = await response.json();
            console.log(json)
            if(json.code==200)
            {
                return <WebView
                source={{uri: 'http://192.168.88.2:8000/api/v1/chargewallet' , method : 'POST' , body : `api_token=${this.state.apiToken}&price=${price}` }}
                startInLoadingState={true}
                renderLoading={this.renderLoading}
            />
            }
      
        
        
    }
    async print() {
    try {
        let apiToken = await AsyncStorage.getItem('apiToken');
        // console.log('s'+apiToken);
        // this.setState({an:apiToken});
        this.get_wallet(apiToken);
        // alert(apiToken)
        return apiToken== null
            ?  await alert('null')
            : await this.setState({
              an:apiToken
              
            });
            console.log('2'+apiToken);
            console.log('3'+an);
           
    } catch(error) {
        console.log(error)
    }
}
async create_wallet() {
    try {
        let apiToken = await AsyncStorage.getItem('apiToken');
  
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
        this.setState({message:'کیف پول شما ایجاد شد',show:0})
        let json = await response.json();
        console.log(json);
        // we can use of response.code
       
  
    } catch(error) {
        console.log(error);
    }
  }
}
const styles = StyleSheet.create({

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
});