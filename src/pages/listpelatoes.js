import React from 'react';
import { AsyncStorage , FlatList ,StyleSheet,Image} from 'react-native';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner} from 'native-base';
import { Actions } from 'react-native-router-flux';
import headerStyles from './../assets/styles/header'
export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            part1 : [],
            page : 3,
            loading : false,
            refreshing : false
        }
    }
    componentWillMount() {
      

        this.getProductRequest();
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                    <Left>
                        <Icon name="md-menu" onPress={() => Actions.drawerOpen() } style={{ color : 'white' , fontWeight : 500 }}/>
                    </Left>
                    <Right>
                        <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>صفحه اصلی</Text>
                    </Right>
                </Header>
                <FlatList
                    data={this.state.part1}
                    keyExtractor={(item) => item.id.toString()}
                    ListEmptyComponent={() => <Spinner />}
                    ListFooterComponent={this.renderFooter.bind(this)}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                    onEndReached={this.handleLoadMore.bind(this)}
                    onEndReachedThreshold={0.5}
                  renderItem={({item})=>
                    <View style={styles.container}>
             
                    <Image source={item.image} style={styles.image} />
             
                    <View style={{ padding : 10}}>
             
                        <Text >{item.title}</Text>
             
                        <Text note numberOfLines={2} style={styles.body}>{item.body}</Text>
             
                    </View>
             
                </View>
              
                }
                />
            </Container>
        )
    }

   

    handleRefresh() {
        this.setState({ page : 1 , refreshing : true } , () => {
            this.getProductRequest();
        })
    }


    renderFooter() {
        if(!this.state.loading) return null;

        return <Spinner />
    }

    handleLoadMore() {
        if(this.state.part1.length > 0) {
            this.setState({page : this.state.page + 1 , loading : true}, () => {
                this.getProductRequest()
            })
        }
    }

    getProductRequest() {
        fetch(`http://192.168.157.2:8000/api/v1/centertype/2`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    products : json.data.data
                })
            })
            .catch(error => console.log(error))
    }
}
const styles=StyleSheet.create({
    container:{
      flex:1,
        margin: 5,
        backgroundColor : 'white',
        elevation : 1,
        shadowColor : '#000',
        shadowOffset : { width : 0 , height: 20},
        shadowOpacity : .2,
    
},
image:{
    width : '100%',
        height: 120
    
},


})