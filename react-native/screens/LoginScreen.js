import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Button,
    ImageBackground,
    TextInput,
    StyleSheet,
    BackHandler
} from 'react-native'
import BaseScreen from './BaseScreen';
import { Navigation } from 'react-native-navigation';
export default class LoginScreen extends BaseScreen {

    constructor(props){
        super(props);
        this.state={
            account:'',
            psw:'',
        }
    }
    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress',this.hardwareBackPress)
    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',this.hardwareBackPress);
        
    }
    hardwareBackPress(){
        BackHandler.exitApp()
    }
    render(){
        return(
            <ImageBackground 
                source = {require('../imgs/login.jpg')}
                style={{width:'100%',height:'100%',alignItems:'center'}}
            >
                <Text style={{fontWeight:'bold',fontSize:20,alignItems:'center',marginTop:80}}>登录</Text>
                <View style={styles.inputStyle}>
                    <Text>账号：</Text>
                    <TextInput
                    style={{flex:1}}
                        placeholder='请输入账号'
                        underlineColorAndroid="transparent"
                        onChangeText={(text)=>this.setState({account:text})}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <Text>密码：</Text>
                    <TextInput
                        style={{flex:1}}
                        placeholder='请输入密码'
                        underlineColorAndroid="transparent"
                        onChangeText={(text)=>this.setState({psw:text})}
                    />
                </View>
                <TouchableOpacity
                    style={{height:40,borderWidth:1,borderColor:'white',width:250,marginTop:15,justifyContent:'center',alignItems:'center'}}
                    onPress={()=>this.onPress()}
                >
                    <Text>登录</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
    onPress(){
        let params = {
            account:this.state.account,
            psw:this.state.psw
        }
        storage.save('loginData',params)
        Navigation.dismissModal(this.props.componentId)
    }
}
const styles = StyleSheet.create({
    inputStyle:{
        width:250,
        marginTop:15,
        backgroundColor:'white',
        flexDirection:'row',
        borderWidth:0.5,
        borderRadius:20,
        borderColor:'white',
        height:40,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15
    }
})