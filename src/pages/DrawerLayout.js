import React from 'react';
import {View, Text, Item, Icon,Button,Container} from 'native-base';
import {StyleSheet} from "react-native";
import {Actions} from 'react-native-router-flux';
export default class DrawerLayout extends React.Component {
    render() {
        let 
        topic1 = '*درباره ما*' ,
        content1 = 'ما مجموعه شاد که می خوایم فقط برنامه نویسی کنیم',
        topic2 = '*پشتیبانی*' ,
        content2 = '*09013235579*';
        return (
            <Container style={{backgroundColor : '#2d3436'}}>
                <View>
                    <View style={{width : 400,height : 200,backgroundColor : '#34495e'}}>
                    <View style={styles.profile}>
                    <Icon  style={{fontSize : 56, color : '#00BCD4',marginTop : 40}} name='person'/>
                    </View>
                    <Button onPress={()=>Actions.lightbox({show : 14})} style={styles.logOutBtn}> 
                    <Text style={{marginLeft : 30,marginRight : 30}}>خارچ می شوم</Text>
                    </Button>
                </View>
                <View style={{marginTop : 10}}>
                    <Item  onPress={() => Actions.goodest_centers()}>
                        <Text style={{color : 'white'}}>داشبورد</Text>
                    </Item>
                    <Item  onPress={() => Actions.home()}>
                        <Text style={{color : 'white'}}>مراکز</Text>
                    </Item>
                    <Item  onPress={() => Actions.lightbox({topic : topic1,content : content1})}>
                        <Text style={{color : 'white'}}>درباره ما</Text>
                    </Item>
                    <Item  onPress={() => Actions.wallet()}>
                        <Text style={{color : 'white'}}> کیف پول</Text>
                    </Item>
                    <Item  onPress={() => Actions.unique_code()}>
                        <Text style={{color : 'white'}}>کد اختصاصی شما</Text>
                    </Item>
                    <Item  onPress={() => Actions.home()}>
                        <Text style={{color : 'white'}}>امتیاز ها</Text>
                    </Item>
                    <Item  onPress={() => Actions.subscribe()}>
                        <Text style={{color : 'white'}}>زیر مجموعه</Text>
                    </Item>
                    <Item  onPress={() => Actions.lightbox({topic : topic2,content : content2})}>
                        <Text style={{color : 'white'}}>پشتیبانی</Text>
                        
                    </Item>
                </View>
            </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    profile :  {
        width : 140,
        height : 140,
        borderRadius : 140,
        backgroundColor :  '#607D8B',
        marginLeft : 60,
        marginRight : 60,
        alignItems :  'center',
        borderColor : 'white',
        borderWidth : 1,
    },
    logOutBtn : {
        width : 200,
        height : 33,
        marginTop :  5,
        backgroundColor : 'green',
        paddingVertical :  10,
        paddingHorizontal :  5,
        borderRadius :  10,
        alignItems :  'center',
        borderWidth : 1.3,
        borderColor : 'white',
        marginLeft : 40,
        marginRight : 40,
        marginTop : 15
       
      }
});