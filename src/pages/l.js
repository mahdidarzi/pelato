import React from 'react';
import { AsyncStorage } from 'react-native';
import { Container , Header , View , Text , Left , Button , Right , Content , Form , Item , Icon , Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { form } from './../assets/styles';
export default class Login extends React.Component {
    componentWillMount() {
        this.state = {
            email : {
                value : '',
                error : ''
            },
            password : {
                value: '',
                error : ''
            }
        }
    }

    render() {
        const emailError = this.state.email.error;
        const passwordError = this.state.password.error;

        return (
            <Container>
                <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                    <Left>
                        <Button transparent>
                            <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>عضویت</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>صفحه ورود</Text>
                    </Right>
                </Header>
                <Content>
                    <Form style={form.StyleForm}>
                        <Item rounded style={form.item} error={emailError !== ''}>
                            <Input
                                placeholder='ایمیل خود را وارد کنید'
                                style={form.input}
                                onChangeText={this.changeEmailInput.bind(this)}
                            />
                            <Icon active name='md-mail' />
                        </Item>
                        <Text style={[form.error , this._checkDisplay(emailError)]}>پر کردن این فیلد الزامی است</Text>
                        <Item rounded style={form.item} error={passwordError !== ''}>
                            <Input
                                placeholder='پسورد خود را وارد کنید'
                                style={form.input}
                                secureTextEntry
                                onChangeText={this.changePasswordInput.bind(this)}
                            />
                            <Icon active name='md-key' />
                        </Item>
                        <Text style={[form.error , this._checkDisplay(passwordError)]}>پر کردن این فیلد الزامی است</Text>
                        <Button full style={form.submitButton} onPress={this.login.bind(this)}>
                            <Text style={form.submitText}>ورود</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>

        )
    }

    _checkDisplay(field) {
        return { display: field === '' ? 'none' : 'flex'}
    }

    login() {
        let { email , password } = this.state;
        if(email.value === '') {
            this.setState({
                email : {
                    value : '',
                    error : 'فیلد ایمیل نمی تواند خالی بماند'
                }
            });
            return;
        }

        if(password.va === '') {
            this.setState({
                password : {
                    value : '',
                    error : 'فیلد پسورد نمی تواند خالی بماند'
                }
            });
            return;
        }


        this.requrestLoginFromApi({
            email : email.value,
            password : password.value
        })

    }

    changeEmailInput(text) {
        this.setState({
            email : {
                value : text,
                error : ''
            }
        })
    }

    changePasswordInput(text) {
        this.setState({
            password : {
                value : text,
                error : ''
            }
        })
    }

    async requrestLoginFromApi(params) {
        try {
            let { email , password } = params;
            let response = await fetch('http://roocket.org/api/login', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    email,
                    password
                })
            });
            let json = await response.json();

            if(json.code === 200) {
                // login
                await this.setDataUser(json.data.api_token)
            }

            if(json.code === 422) {
                // Validate
                console.log('validate');
            }

            if(json.code === 302) {
                // Auth
                console.log('auth')
            }

        } catch(error) {
            console.log(error);
        }
    }

    async setDataUser(apiToken) {
        try {
            await AsyncStorage.setItem('apiToken',apiToken);
            Actions.reset('root');
        } catch(error) {
            console.log(error);
        }
    }
}