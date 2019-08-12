const React = require('react');
const {StyleSheet, Text, View, Image} = require('react-native');
const {Container, Header, Content, Button, Left, Icon, Body} = require('native-base');
const {Actions} = require('react-native-router-flux');
const PersianCalendarPicker = require('react-native-persian-calendar-picker');
var moment = require('moment-jalaali')
moment().format('jYYYY/jM/jD');
import headerStyles from './../assets/styles/header'
import centersStyles from '../assets/styles/centersStyles';
export default class date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate : null,
      id:this.props.id,
      description:this.props.description
    };
        this.onDateChange = this.onDateChange.bind(this);
  }
  render() {
        const {selectedStartDate, id, description} = this.state;
        const startDate = selectedStartDate ? moment(selectedStartDate).format('jYYYY-jM-jD').toString() : '';
        const startDatem = selectedStartDate ? moment(selectedStartDate).format('YYYY-M-D').toString() : '';
    return (
      <Container style = {{ backgroundColor : '#2d3436'}}>
          <Header   style = {headerStyles.headersbackground} androidStatusBarColor = "#2c3e50" iosBarStyle = "light-content">
            <Left style = {headerStyles.headerLeftStyle1}>
            < Icon  name = "md-menu" onPress = {() => Actions.drawerOpen() } style = {headerStyles.drawerStlye}/>
            </Left> 
            <Left style = {headerStyles.headerLeftStyle2}>
            < Image  source = {require('./../assets/image/pelatos.png')}/>
            </Left> 
            <Body style = {headerStyles.body}><Text style = {headerStyles.bodyText}> پنل کاربری پلاتو</Text></Body>
            <Left style = {headerStyles.headerLeftStyle3}>
                  <View  style = {headerStyles.personIconView}>
            <Icon  name = 'person'   style = {headerStyles.iconPerson}/>
                </View>
            </Left> 
          </Header>
          <Content>
            <PersianCalendarPicker
              textStyle = {{color:'white'}}
              onDateChange = {this.onDateChange}/>
              <View  style = {{flexDirection:'row'}}>
                <Text style = {{color:'white',marginLeft:20}}>تاریخ انتخاب شده :</Text>
                <Text style = {{color:'white'}}>{ startDate }</Text>
                <Text>{startDatem}</Text>
            </View>
            <View>
              {/* i use of centersStyles.btnreserve becuse is similar with reservebtn  */}
              <Button style = {[centersStyles.btnreserve, {marginLeft:50}]}  onPress = {()=>Actions.rooms({id : id,description : description,date : startDate,datem :startDatem})}>
              <Text style = {{color:'white',marginLeft:50,marginRight:50}}>لطفا بعد از انتخاب تاریخ کلیک کنید</Text>
              </Button>
            </View>
          </Content>
      </Container>
    );
  }
  onDateChange(date) {
    this.setState({selectedStartDate : date});
  }
}