import React,{Component}from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    NativeModules
}from 'react-native'
export default class MainScreen extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity
                    onPress={()=>this.onPress()}
                >
                    <Text>原生页面跳转</Text>
                </TouchableOpacity>
            </View>
        )
    }
    onPress(){
        NativeModules.AndroidScreens.startActivityByClassName('com.rn_modules.AndroidWithJsScreen')
    }
}