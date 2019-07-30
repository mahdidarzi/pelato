import React from 'react';
import { AsyncStorage , FlatList ,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Body,Item,Input} from 'native-base';
import { Actions } from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import headerStyles from './../assets/styles/header'
export default class part1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            part1 : [],
            page : 1,
            loading : true,
            refreshing : false,
            centersid:0,
             show_search:0,
            show_spiner:0,
            show_search:0,
            
        }
        this.arrayholder = [ ];
    }
    componentWillMount() {
        
        this.getProductRequest(); 
        this.getProductRequestf();
        
        
      

        
    }
   
    
    render() {
//         var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();

// if(dd<10) {
//     dd = '0'+dd
// } 

// if(mm<10) {
//     mm = '0'+mm
// } 

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
        // console.log(this.state.part1[1].id[3]);
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
                {this.state.show_search==1?<Text Style={{color:'white'}}> مرکز یافت نشد</Text>:null}
                <View style={{alignItems:'center',marginTop:25,height:5,marginLeft:40,marginRight:40}}>
             <Item style={{height:35,width:200,padding:5,}} rounded style={{backgroundColor:'white'}}>
          <Icon  name="ios-search" />
          <Input style={{height:35,width:250,  alignItems: 'center',padding:5}} onChangeText={text => this.searchFilterFunction(text)} placeholder='جستحوی مرکز'  value={this.state.value}/>
        </Item>
            
                        </View>
                <FlatList style={{marginTop:50}}

ListEmptyComponent={() =>this.state.show_spiner==0?<Spinner/>:null}
ListFooterComponent={this.state.loading?null:< Spinner />}
ListFooterComponent={this.renderFooter.bind(this)}
refreshing={this.state.refreshing}
onRefresh={this.handleRefresh.bind(this)}
onEndReached={this.handleLoadMore.bind(this)}
onEndReachedThreshold={0.7}
 data={this.state.part1}
 keyExtractor={(item) => item.id.toString()}
renderItem={({item})=>
//   <TouchableOpacity onPress={()=>Actions.rooms({id:item.id})}>

 <View key={item.id} style={styles.container}>
 {/* <Image source={{uri:item.images.length==0?null:item.images[0].picture}} style={styles.image} /> */}
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
 <View key={item.id} style={{ padding : 10 , }}>

      {/* <Image source={{uri:item.images[0]}} style={styles.image} /> */}
      <Text note numberOfLines={2} style={[styles.body,{marginLeft:130,marginRight:130,color:'#00cec9',fontSize:16}]}>{item.name}</Text>
      <Text note numberOfLines={2} style={styles.body}>نوع مرکز:پلاتو</Text>
      <Text note  style={styles.body}> تعداد اتاق:{item.rooms.length}</Text>
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
      
      <Text note style={styles.body}>{item.address}</Text>
      {/* <Text note style={styles.body}>{item.description}</Text> */}
      <TouchableOpacity onPress={()=>Actions.date({id:item.id,description:item.description})}  style={styles.reserve}>
         <Text style={{color: '#fff',alignItems:'center',fontSize:16,margin:-8}}>مشاهده و رزرو مرکز</Text>
     </TouchableOpacity>

      {/* <Text note numberOfLines={2} style={{color:'yellow'}}>{item.images.length==0?null:item.images.length}</Text> */}
     
 </View>

</View>



}
/>
            </Container>
        )
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
        // console.log(newData.length);
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
            part1: newData,
        });
       
      };
    // let response =  fetch(`http://192.168.193.2:8000/api/v1/pelato/${this.props.id}?page=${page}`);
    handleRefresh() {
        this.setState({ page : 1 , refreshing : true } , () => {
            this.getProductRequest();
        })
    }
  

    renderFooter() {
       
        if(this.state.loading) return null;

        return <Spinner  />
    }

    handleLoadMore() {
        if(this.state.part1.length > 0) {
            this.setState({page : this.state.page + 1 , loading : true}, () => {
                this.getProductRequest()
            })
        }
    }
    

    async getProductRequest() {
       
        try {
            const { page } = this.state;
            var urls=[
                `http://192.168.88.2:8000/api/v1/pelato/${this.props.id}?page=${page}`,
                // ` http://192.168.193.2:8000/api/v1/images/2`
            ]
            await this.setState({ loading : true});
            let response = await fetch(urls);
            let json = await response.json();
            var part1 = json.data.data;
          
            if(part1.length > 0) {
                
                this.setState(prevState => {
                    
                    return {
                        
                        part1 : page === 1 ? part1 : [...prevState.part1 , ...part1],
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
    async getProductRequestf() {
     
        try {
            const { page } = this.state;
            var urls=[
                `http://192.168.88.2:8000/api/v1/simplecenter/${this.props.id}?page=${page}`,
            ]
          
            let response = await fetch(urls);
            let json = await response.json();
            this.arrayholder =  json.data.data;
            console.log( this.arrayholder+'hjahskdkn')      
        } catch(error) {
            console.log(error)
        }
    }
}

   
const styles=StyleSheet.create({
    container:{
      flex:1,
        margin: 5,
        backgroundColor : '#2f3542',
        elevation : 1,
        shadowColor : '#000',
        shadowOffset : { width : 0 , height: 20},
        shadowOpacity : .2,
    
},
image:{
    width : '100%',
        height: 150,
        borderRadius:8
    
},
body:{
    color:'white',
    marginBottom:8,
    fontSize:16,
    marginLeft:5,
    marginTop:5,
   
    
},
property:{
    width : '100%',
    height: 100,
    backgroundColor:'#34495e',
    borderRadius : 10,
    borderWidth:1.8,
    borderColor:'white',
 
  },
  text_pro:{
    backgroundColor:'blue',
    color:'white',
    marginLeft:5,
    padding:3,
    marginTop:5,
    borderRadius : 5,
  },
  buttonView: {
    width:250,
    height:30,
    // marginTop: 50,
    backgroundColor:'gray',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth:1.3,
    borderColor:'white',
   
    
  },
  reserve:{
    width:300,
    height:33,
    marginTop: 5,
    backgroundColor:'green',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth:1.3,
    borderColor:'white',
    marginLeft:10,
    marginRight:10,
   
      
  }


})