import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    NativeModules
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { showModalToLogin } from './screens';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
import ScreenA from './screens/ScreenA';
import ScreenD from './screens/ScreenD';
import BottomTabCell from './screens/comps/BottomTabCell';


export default class MainScreen extends Component {

    constructor(props){
        super(props);
        this.text = ['主页', '分类', '她他群','我的']
        this.bottomTabs = [
            {text: '书包',badge:'1',icon: require('./imgs/shubao1_icon.png'),selectedIcon:require('./imgs/shubao2_icon.png')},
            {text: '衣服',badge:'0',icon: require('./imgs/yifu1_icon.png'),selectedIcon: require('./imgs/yifu2_icon.png')},
            {text: '钟表',badge:'0',icon: require('./imgs/zhongbiao1_icon.png'),selectedIcon: require('./imgs/zhongbiao2_icon.png')},
            {text: '玩具',badge:'0',icon: require('./imgs/wanju1_icon.png'),selectedIcon: require('./imgs/wanju2_icon.png')}
        ]
        this.state={

        }
    }
    componentWillMount() {
        this.checkLoginState();

    }
    checkLoginState() {
        storage.load('loginData')
        .then(ret =>{
            console.log('ret', ret);
            if (ret.account != '' && ret.psw != '') {

            } else {
                showModalToLogin()
            }
        }).catch(err => {
                console.log('err', err);
                showModalToLogin()
            })
    }
    
    render() {
        return (
            <ScrollableTabView
                style={{}}
                tabBarPosition='bottom'
                locked={false}
                tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                tabBarActiveTextColor='#3399fe'
                scrollWithoutAnimation={false}
                initialPage={0} //初始化时被选中的Tab下标，默认是0  
                onChangeTab={(obj) => {console.log('tab=' + obj.i);}}               
                renderTabBar={() =>
                    <BottomTabCell 
                        data={this.bottomTabs}
                    />
                }
            >
                <ScreenA tabLabel='Tab #1'>1</ScreenA>
                <ScreenB tabLabel='Tab #2'>2</ScreenB>
                <ScreenC tabLabel='Tab #3'>3</ScreenC>
                <ScreenD tabLabel='Tab #4'>4</ScreenD>
                {/* <Text tabLabel = 'Tab #5'>4</Text>
                    <Text tabLabel = 'Tab #6'>4</Text>
                    <Text tabLabel = 'Tab #7'>4</Text> */}

            </ScrollableTabView>
        )
    }
    onPress() {
        NativeModules.AndroidScreens.startActivityByClassName('com.rn_modules.AndroidWithJsScreen')
    }
    onPress1() {

        // Navigation.push(this.props.componentId, {
        //     component: {
        //         name: 'ScreenA',
        //         options: {
        //             layout: {
        //                 backgroundColor: 'white',
        //                 // topMargin:500,
        //             },
        //             topBar: {
        //                 title: {
        //                     text: 'ScreenA'
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