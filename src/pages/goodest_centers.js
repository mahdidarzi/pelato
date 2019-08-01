import React from 'react';
import {FlatList, Image, TouchableOpacity, BackHandler, ToastAndroid, ScrollView} from 'react-native';
import {Container, Header, Button, Text, Left, Icon , View , Spinner, FooterTab, Footer, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import headerStyles from './../assets/styles/header';
import centersStyles from '../assets/styles/centersStyles';
export default class goodest_centers extends React.Component {
    constructor(props) {
        super(props);
        this.backBtnCount = 0;//q
        this.onHandleBackButton = this.handleBackButton.bind(this);//q
        this.state = {
            goodestCenters : [],
            page : 1,
            loading : false,
            refreshing : false,
            showSpiner : 0,
        }
    }
     componentDidMount() {
        this.getCentersRequest();
      }
      componentWillUpdate() {
        BackHandler.addEventListener('hardwareBackPress', this.onHandleBackButton);
      }
    render() {
        return (
            <Container style = {centersStyles.containerbackground}>
                <Header style = {headerStyles.headersbackground} androidStatusBarColor = "#2c3e50" iosBarStyle = "light-content">
                    <Left style = {headerStyles.headerLeftStyle1}>
                        <Icon  name = "md-menu" onPress={() => Actions.drawerOpen()} style = {headerStyles.drawerStlye}/>
                    </Left> 
                    <Left style = {headerStyles.headerLeftStyle2}>
                      <Image source = {require('./../assets/image/pelatos.png')}  />
                    </Left> 
                       <Body style = {headerStyles.body}><Text style = {headerStyles.bodyText}> پنل کاربری پلاتو</Text></Body>
                    <Left style = {headerStyles.headerLeftStyle3}>
                      <View  style = {headerStyles.personIconView}>
                        <Icon  name = 'person'   style = {headerStyles.iconPerson}/>
                      </View>
                    </Left> 
                </Header>
                <FlatList
                   data = {this.state.goodestCenters}
                   ListEmptyComponent ={ () =>this.state.showSpiner == 0 ?<Spinner/>  : null}
                  //  ListFooterComponent = {this.state.loading?null:< Spinner />}
                   ListFooterComponent = {this.renderFooter.bind(this)}
                   refreshing = {this.state.refreshing}
                   onRefresh = {this.handleRefresh.bind(this)}
                   onEndReached = {this.handleLoadMore.bind(this)}
                   onEndReachedThreshold = {0.7}
                   keyExtractor = {(item) => item.id.toString()}
                   renderItem = {({item})=>
                    <View key = {item.id} style={centersStyles.centerContainer}>
                      <View style = {centersStyles.goodestCenterBox}>
                        <Text style = {centersStyles.goodestCenterBoxsText}>برترین مراکز</Text>
                    </View>
                    <View style = {centersStyles.imageView}>   
                      {this.showImageSlider( item.images )}                  
                    </View>
                    <View key = {item.id} style = {{ padding : 10 , }}>                      
                      <Text note numberOfLines = {2} style = {centersStyles.centerNmae}>{item.name}</Text>
                      <Text note numberOfLines = {2} style = {centersStyles.ordinaryText}>نوع مرکز:پلاتو</Text>
                      <Text note  style = {centersStyles.ordinaryText}> تعداد اتاق:{item.rooms.length}</Text>
                      <ScrollView style = {centersStyles.propertiesView}>
                        <Text style = {[centersStyles.ordinaryText,{color:'white'}]}>ویژگی ها</Text>
                        {this.showCentersProperties(item.center_attribute)}
                    </ScrollView>
                    <Text note style = {centersStyles.ordinaryText}>{item.address}</Text>
                      <TouchableOpacity onPress = {()=>Actions.date({id:item.id,description:item.description})} 
                      style = {centersStyles.btnreserve}>
                        <Text style = {centersStyles.reserveText}>مشاهده و رزرو مرکز</Text>
                    </TouchableOpacity>
                    </View>      
                  </View>
                }
                />
                 <Footer >
                  <FooterTab style = {{ backgroundColor : '#34495e'}}>
                    <Button style = {{ backgroundColor : 'cyan'}} >
                      <Text style = {{fontSize:15,color:'black',}}>بهترین</Text>
                      <Text style = {{fontSize:15,color:'black',marginTop:2}}>مراکز</Text>
                    </Button>
                    <Button>
                      <Text>جستجوی پیشرفته</Text>
                    </Button>
                    <Button onPress = {()=>Actions.home()}>
                      <Text style = {{fontSize:16}}>مراکز</Text>
                    </Button>
                    <Button>
                      <Text onPress = {()=>Actions.wallet()} style={{fontSize:16}}>کیف پول</Text>
                    </Button>
                  </FooterTab>
        </Footer>
            </Container>
        )
    }
    showImageSlider(images) {
      array_images = [];
      if(images.length == 0){
        array_images.push('http://learnenglishteens.britishcouncil.org/sites/teens/files/rs6095_thinkstockphotos-119692035_1-low.jpg');
      }
      for(let lopCounter = 0; lopCounter < images.length; lopCounter++)
      {
        array_images.push(images[lopCounter].picture);
      }
      return(
         <ImageSlider 
         style = {centersStyles.imageSlider} 
         images = {array_images}autoPlayWithInterval={2000}/> 
      )
    }
    showCentersProperties(properties) {
        return (
          <FlatList 
            style = {{flexDirection:'row'}}
            data = {properties}
            keyExtractor = {(item) => item.name.toString()}
            renderItem = {({item}) =>
            <Text style = {centersStyles.properties}>
              {item.name}
            </Text> }
          />
        )
      }
    handleRefresh() {
        this.setState({ page : 1 , refreshing : true } , () => {
            this.getCentersRequest();
        })
    }
    renderFooter() {
        if(this.state.loading) return null
         return <Spinner/>
    }
    handleLoadMore() {
        if(this.state.goodestCenters.length > 0) {
            this.setState({page : this.state.page + 1 , loading : true}, () => {
                this.getCentersRequest()
            })
        }
    }
    async getCentersRequest() { //q:async and await
        try {
            const { page } = this.state;
            var urls = `http://192.168.88.2:8000/api/v1/goodest_centers?page=${page}`;
            await this.setState({ loading : true});
            let response = await fetch(urls);
            let json = await response.json();
            var goodestCenters = json.data.data;
            if(goodestCenters.length > 0) {
                this.setState(prevState => {
                  return {
                        goodestCenters : page === 1 ? goodestCenters : [...prevState.goodestCenters , ...goodestCenters],
                        page : json.data.current_page,
                        refreshing : false,
                        loading:false,   
                    }
                })
                //i had a warninig for below command
                //hint: carefuly read warning
                // this.setState({ loading : false})
            }   
        } catch(error) {
            console.log(error)
        }
    }
    handleBackButton() {
      if(Actions.currentScene == 'goodest_centers') {
        if (this.backBtnCount == 1) 
          BackHandler.exitApp();
      else if (this.backBtnCount == 0) {
        ToastAndroid.show("لطفا دوبار برای  خروج از برنامه کلیک کنید", ToastAndroid.SHORT);
        this.backBtnCount++;
          setTimeout(() => {
              if (this.backBtnCount != 2)
                  this.backBtnCount = 0;
          }, 2000)
          return true;//q
      }
      }   
}
}