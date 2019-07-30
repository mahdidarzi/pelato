import React from 'react';
import {Image,AsyncStorage,FlatList} from "react-native";
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,FooterTab,Footer,Body,Card,CardItem} from 'native-base';
import { Actions } from 'react-native-router-flux';
import headerStyles from './../assets/styles/header'
export default class subscribe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subscribe:[],
            apiToken:null,
            // m:await AsyncStorage.getItem('apiToken'),
        }
    }
    componentWillMount() {
          this.subscribe();
    }
    render() {
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
                  <FlatList
                    data={this.state.subscribe}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=> 
                  
                  <Card>
                  <CardItem >
                  <Left>
                  <Text>{item.username} </Text>
                  </Left>
                    <Right>
                    <Text>0{item.phonenumber}</Text>
                    </Right>
                   </CardItem>
                 </Card>
                }
                />
            </Container>
        )
    }
    async subscribe() {
        try {
           
            var apiToken = await AsyncStorage.getItem('apiToken');
            this.setState({apiToken:apiToken})
            let api_t=apiToken;
            console.log(apiToken);
            // alert(apiToken+'s')
            // return apiToken== null
            //     ?  await alert('null')
            //     : await this.setState({
            //       an:apiToken
                  
            //     });
      
            let response = await fetch('http://192.168.88.2:8000/api/v1/subscribe', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    api_token:api_t
                })
            });
           
            let json = await response.json();
            console.log(json);
            console.log(json.data);
            console.log(json.data.data);
            if(json.code==200){
                this.setState({subscribe:json.data})
                console.log('json.data');
            }
            if(json.code==422){
                Actions.lightbox({show:16})
            }
        } catch(error) {
            console.log(error);
        }
      }
      async print() {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
            this.setState({apiToken:apiToken})
            // console.log('s'+apiToken);
            // this.setState({an:apiToken});
            // this.get_wallet(apiToken);
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
}