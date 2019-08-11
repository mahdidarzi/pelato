import React from 'react';
import {FlatList, Image, TouchableOpacity, BackHandler, ToastAndroid, ScrollView} from 'react-native';
import {Container, Header, Button, Text, Left, Icon , View , Spinner, FooterTab, Footer, Body, Content} from 'native-base';
import {Actions} from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import headerStyles from '../assets/styles/header';
import centersStyles from '../assets/styles/centersStyles';
export default class showCenter extends React.Component {
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
            t:0
        }
    }
     componentDidMount() {
        this.getCentersRequest((goodestCenters) => {console.log(['getCentersRequest:done',goodestCenters]) });
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
                        <Icon  name = 'person' style = {headerStyles.iconPerson}/>
                      </View>
                    </Left> 
                </Header>
                {this.props.simpOrGodCenter != 'simpleCenter' ? 
                <View style = {centersStyles.goodestCenterBox}>
                <Text style = {centersStyles.goodestCenterBoxsText}>برترین مراکز</Text>
              </View>:null}
                  <FlatList
                    data = {this.state.goodestCenters}
                    ListEmptyComponent ={() => <Spinner/>}
                    ListFooterComponent = {this.state.loading?null:< Spinner />}
                    refreshing = {this.state.refreshing}
                    onRefresh = {this.handleRefresh.bind(this)}
                    onEndReached = {this.handleLoadMore.bind(this)}
                    onEndReachedThreshold = {0.3}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem={this.flatRenItem}
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
                      <Text onPress = {()=>Actions.wallet()} style = {{fontSize:16}}>کیف پول</Text>
                    </Button>
                  </FooterTab>
        </Footer>
            </Container>
        )
    }
    flatRenItem = ({item}) => {
      return(
        <View style={centersStyles.centerContainer}>
          <View style = {centersStyles.imageView}>   
            {this.showImgSlider( item.images )}                  
          </View>
          <View  style = {{ padding : 10 , }}>                      
            <View style = {{justifyContent : 'center', alignItems : 'center'}}>
              <Text note numberOfLines = {2} style = {centersStyles.centerName}>{item.name}</Text>
            </View>
            <Text note numberOfLines = {2} style = {centersStyles.ordinaryText}>نوع مرکز:پلاتو</Text>
            <Text note  style = {centersStyles.ordinaryText}> تعداد اتاق:{item.rooms.length}</Text>
            <ScrollView style = {centersStyles.CentersPropsView}>
              <Text style = {[centersStyles.ordinaryText,{color:'white'}]}>ویژگی ها</Text>
              {this.showCentersProps(item.center_attribute)}
          </ScrollView>
          <Text note style = {centersStyles.ordinaryText}>{item.address}</Text>
            <TouchableOpacity onPress = {()=>Actions.date({id:item.id,description:item.description})} 
            style = {centersStyles.btnreserve}>
              <Text style = {centersStyles.reserveText}>مشاهده و رزرو مرکز</Text>
          </TouchableOpacity>
          </View>      
        </View>
      )
    }
    showImgSlider(images) {
      arrImgs = [];
      let defaultImg = 'http://learnenglishteens.britishcouncil.org/sites/teens/files/rs6095_thinkstockphotos-119692035_1-low.jpg';
      if(images.length == 0){
        arrImgs.push(defaultImg);
      }
      for(let lopCounter = 0; lopCounter < images.length; lopCounter++)
      {
        arrImgs.push(images[lopCounter].picture);
      }
      return(
         <ImageSlider 
         style = {centersStyles.imageSlider} 
         images = {arrImgs}autoPlayWithInterval={2000}/> 
      )
    }
    showCentersProps(CentersProps) {
        return (
          <FlatList 
            style = {{flexDirection:'row'}}
            data = {CentersProps}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) =>
            <Text style = {centersStyles.CentersProps}>
              {item.name}
            </Text>} />
        )
      }
    handleRefresh() {
        this.setState({page : 1 , refreshing : true},
        () => this.getCentersRequest().then(console.log('handleRefresh:done')));  
    }
    handleLoadMore() {
      let {page, loading} = this.state;
      if (loading == false){ 
      this.setState({page : page + 1 ,loading:true}, 
      () => this.getCentersRequest().then(console.log(`handleLoadMore:done currentpage:${page}`)))
      }
    }
    async getCentersRequest(callback) {
        try {
            const {page} = this.state;
            const {simpOrGodCenter, id} = this.props;
            let url, json, response, goodestCenters;
            url = `http://192.168.157.2:8000/api/v1/goodest_centers?page=${page}`
            if(simpOrGodCenter =='simpleCenter')
            url = `http://192.168.157.2:8000/api/v1/simplecenter/${id}?page=${page}`;
            console.log(url)
            this.setState({loading : true});
            response = await fetch(url);
            json = await response.json();
           goodestCenters = json.data.data;
          if(goodestCenters.length > 0) {
                this.setState(prevState => {
                  return {
                        goodestCenters : page == 1 ? goodestCenters : [...prevState.goodestCenters , ...goodestCenters],
                        page : json.data.current_page,
                        refreshing : false,
                        loading:false,   
                    }  
                })
            }   
            if (typeof callback =='function')
            callback(goodestCenters);
        } catch(err) {
            console.log(err)
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