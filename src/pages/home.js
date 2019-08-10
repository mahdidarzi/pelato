import React, { Component } from 'react';
import { AsyncStorage , FlatList ,StyleSheet,Image,TouchableOpacity,BackHandler,ToastAndroid,ActivityIndicator} from 'react-native';
import {Actions} from "react-native-router-flux";
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,CardItem,Card,Body} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import headerStyles from './../assets/styles/header'
export default class home extends Component {

  constructor(props) {
    super(props);
   
    this.state={
      loading: false,
      show_search:0,
      show_spiner:0,
      products:[]
    }
    this.state = {
      an:0,
      count: [

        { 
          id:1,
          title : '  استدیو موزیک',
          body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
      },

      { 
        id:2,
          title : '  تست کالباس و پنیر',
          body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
    },
     
    { 
      id:3,
     title : '  تست کالباس و پنیر',
     body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '

    },
  { 
    id:4,
          title : '  تست کالباس و پنیر',
          body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},
 
{ 
  id:5,
 title : '  تست کالباس و پنیر',
 body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
  id:6,
 title : '  تست کالباس و پنیر',
 body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
  id:7,
 title : '  تست کالباس و پنیر',
 body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
  id:8,
 title : '  تست کالباس و پنیر',
 body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
  id:9,
 title : '  تست کالباس و پنیر',
 body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
  id:10,
 title : '  تست کالباس و پنیر',
 body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},




      ],
   }
   this.arrayholder = [
    { 
       id:1,
       title : '  استدیو موزیک',
       body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
   },

   { 
     id:2,
       title : 'سالن تعاتر',
       body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
 },
  
 { 
   id:3,
  title : 'اموزشگاه',
  body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '

 },
{ 
 id:4,
       title : '  تست کالباس و پنیر',
       body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
id:5,
title : '  تست کالباس و پنیر',
body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
id:6,
title : '  تست کالباس و پنیر',
body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
id:7,
title : '  تست کالباس و پنیر',
body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
id:8,
title : '  تست کالباس و پنیر',
body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
id:9,
title : '  تست کالباس و پنیر',
body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},

{ 
id:10,
title : '  تست کالباس و پنیر',
body : 'ابتدا یک قاشق سوپخوری هویج ریز و پخته شده را با یک قاشق سیب زمینی پخته و خرد شده ، یک قاشق پنیر پیتزا ، یک عدد تخم مرغ و نمک و فلفل به میزان دلخواه  مخلوط  کنید و در ظرف را بگذارید تا مواد خودش را بگیرد.صبحانه شما همراه با دو عدد نان تست  ودو  ورق کالباس آماده سرو می باشد. '
},];
}
async componentWillMount() {
     
      //TEMP
      // this.getProductRequest();
      // this.print();
      // AsyncStorage.getItem('apiToken' , (error , apiToken) => this.setState({ apiToken }))
      // alert(apiToken)

}
 


  render() {
    if (this.state.loading==true) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
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
      {/* <Header searchBar style={{ backgroundColor : '#34495e',marginLeft:100}}> */}
      <View style={{marginTop:10,marginBottom:10}}>
         <Item rounded style={{backgroundColor:'white',height:35,padding:5,width:250,marginLeft:60,marginRight:60}}>
          <Icon  name="ios-search" />
          <Input style={{height:35,alignItems: 'center',padding:5,width:100}} onChangeText={text => this.searchFilterFunction(text)} placeholder='جستحوی مرکز'  value={this.state.value}/>
        </Item>
        </View>
          {/* <Text>{this.state.an}</Text>
          <Text>{this.state.show_spiner}</Text> */}
         {this.state.show_search==1?<Text > مرکز یافت نشد</Text>:null}
           <FlatList
          //  ListEmptyComponent={() =>this.state.show_spiner==0?<Spinner/>:null}
          ListEmptyComponent={() =>this.state.show_spiner==0?<Spinner/>:null}
                    data={this.state.count}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=> 
                  
                  <Card>
                    <LinearGradient   colors={['#1e3799','#dff9fb']} style={styles.gradiant}>
                  <TouchableOpacity onPress={()=>Actions.showCenter({id:item.id, simpOrGodCenter : 'simpleCenter'})}>

                  <CardItem style={{marginLeft:60,marginRight:100,width:200,height:50,borderColor:'#0c2461',borderWidth:1}}>

                  <Left>
                 
                  </Left>
                    <Text>{item.title} </Text>
                    
                    <Right>
                      
                    </Right>
                   </CardItem>
                   </TouchableOpacity>
                   </LinearGradient>
                  
                 </Card>
                }
                />    
      </Container>
    );
    
  }
  
searchFilterFunction = text => {
  this.setState({
    value: text,
  });

  const newData = this.arrayholder.filter(item => {
    const itemData = `${item.title} ${item.body}`;
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
    count: newData,
  });
};

}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',

  },
  gradiant:{
    width:400,height:100,
    marginTop:0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
