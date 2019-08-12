import React from 'react';
import {Container, Header, Text, Left, Icon, View, Body} from 'native-base';
import {Image,AsyncStorage} from "react-native";
import {Actions} from 'react-native-router-flux';
import headerStyles from './../assets/styles/header'
export default class unique_code extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            getUniqueCode : null
        }
    }
    componentDidMount() {
        this.getUniqueCode();
    }
    render() {
        return (
            <Container style = {{ backgroundColor : '#2d3436'}}>
                <Header style  =  {headerStyles.headersbackground} androidStatusBarColor = "#2c3e50" iosBarStyle = "light-content">
                       <Left style = {headerStyles.headerLeftStyle1}>
                        <Icon name = "md-menu" onPress = {() => Actions.drawerOpen()} style = {headerStyles.drawerStlye}/>
                    </Left> 
                    <Left style = {headerStyles.headerLeftStyle2}>
                    <Image  source = {require('./../assets/image/pelatos.png')}/>
                    </Left> 
                       <Body style = {headerStyles.body}>
                           <Text style = {headerStyles.bodyText}> پنل کاربری پلاتو</Text>
                     </Body>
                    <Left style = {headerStyles.headerLeftStyle3}>
                        <View  style = {headerStyles.personIconView}>
                   <Icon  name = 'person'   style = {headerStyles.iconPerson}/>
                       </View>
                    </Left> 
                      
                    </Header>
                <View style = {{alignItems : 'center',marginTop : 220,marginBottom : 220}}>
                <Text style = {{color : 'white',fontSize : 30}}>{this.state.getUniqueCode}</Text>
                </View>
            </Container>
        )
    }
    async getUniqueCode() {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
            this.setState({getUniqueCode  :  apiToken});     
        } catch(err) {
            console.log(err)
        }
    }
}