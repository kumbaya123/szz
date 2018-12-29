import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import BaseScreen from './BaseScreen';
export default class ScreenB extends BaseScreen {
   
    constructor(props){
        super(props)
        Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex})=>{
            if(selectedTabIndex == 1){
                Navigation.mergeOptions('ScreenB',{
                    bottomTab:{
                        // badge:this.num,
                        icon: require('../imgs/yifu2_icon.png'),
                    }
                })
            }
            
        })
        this.num = 0;
        this.state={

        }
    }
    // componentDidMount(){
    //     Navigation.mergeOptions('ScreenB',{
    //         bottomTab:{
    //             // badge:this.num,
    //             icon: require('../imgs/boluo_icon.png'),
    //         }
    //     })
    // }
    render() {
        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
            onPress={() => this.onPress()}
            >
                <Text>this is ScreenB</Text>
                {/* <Navigation.Element elementId='image2'>
                    <Image source={require('../imgs/xianrenzhang_icon.png')} />
                </Navigation.Element> */}
            </TouchableOpacity>
        )
    }
    onPress() {
        this.num ++;
        Navigation.mergeOptions('ScreenB',{
            bottomTab:{
                badge:this.num,
                // icon: require('../imgs/boluo_icon.png'),
            }
        })
        // Navigation.push(this.props.componentId, {
        //     component: {
        //         name: 'ScreenC',
        //         options: {
        //             layout: {
        //                 backgroundColor: 'white',
        //                 // topMargin:500,
        //             },
        //             topBar: {
        //                 title: {
        //                     text: 'ScreenC'
        //                 },
        //                 // subtitle:{//
        //                 //     text:'aaa'
        //                 // }
        //             },
        //         }
        //     }
        // })
    }
}