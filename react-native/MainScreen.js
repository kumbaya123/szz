import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    NativeModules
} from 'react-native'
import { Navigation } from 'react-native-navigation';
export default class MainScreen extends Component {

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity
                    style={{ height: 50 }}
                    onPress={() => this.onPress()}
                >
                    <Text>原生页面跳转</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 50 }}
                    onPress={() => this.onPress1()}
                >
                    <Text>MainScreen</Text>
                </TouchableOpacity>
            </View>
        )
    }
    onPress() {
        // NativeModules.AndroidScreens.startActivityByClassName('com.rn_modules.AndroidWithJsScreen')
    }
    onPress1() {
        // const bottomTabs = {
        //     id: 'BottomTabsId',
        //     children: [
        //         {
        //             component: {
        //                 name: 'ScreenA',
        //                 options: {
        //                     bottomTab: {
        //                         text: 'Tab 1',
        //                         testID: 'FIRST_TAB_BAR_BUTTON'
        //                     }
        //                 }
        //             }
        //         },
        //         {
        //             component: {
        //                 id: 'SecondScreenId',
        //                 name: 'ScreenB',
        //                 options: {
        //                     bottomTab: {
        //                         text: 'Tab 2',
        //                         testID: 'FIRST_TAB_BAR_BUTTON'
        //                     }
        //                 }
        //             }
        //         }
        //     ]
        // }
        // Navigation.mergeOptions('BottomTabsId',{
        //     bottomTabs:{
        //         currentTabId:1
        //     }
        // })
        // Navigation.setRoot({
        //     root: {
        //       bottomTabs: {
        //         children: [{
        //           stack: {
        //             children: [{
        //               component: {
        //                 name: 'ScreeenA',
        //                 passProps: {
        //                   text: 'This is tab 1'
        //                 }
        //               }
        //             }],
        //             options: {
        //               bottomTab: {
        //                 text: 'Tab 1',
        //                 testID: 'FIRST_TAB_BAR_BUTTON'
        //               }
        //             }
        //           }
        //         },
        //         {
        //           component: {
        //             name: 'ScreenB',
        //             passProps: {
        //               text: 'This is tab 2'
        //             },
        //             options: {
        //               bottomTab: {
        //                 text: 'Tab 2',
        //                 testID: 'SECOND_TAB_BAR_BUTTON'
        //               }
        //             }
        //           }
        //         }]
        //       }
        //     }
        //   });
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