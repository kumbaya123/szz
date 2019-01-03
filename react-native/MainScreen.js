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


export default class MainScreen extends Component {

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
                locked={true}
                tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                tabBarActiveTextColor='#3399fe'
                scrollWithoutAnimation={false}
                initialPage={0} //初始化时被选中的Tab下标，默认是0                    
                renderTabBar={() => <DefaultTabBar />}
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