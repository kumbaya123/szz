import { Navigation } from "react-native-navigation";
import ScreenA from './screens/ScreenA'
import ScreenB from './screens/ScreenB'
import ScreenC from './screens/ScreenC'
import ScreenD from './screens/ScreenD'
import MainScreen from "./MainScreen";
import LoginScreen from "./screens/LoginScreen";

export function registerScreens() {
    Navigation.registerComponent('MainScreen', () => MainScreen);
    Navigation.registerComponent('ScreenA', () => ScreenA);
    Navigation.registerComponent('ScreenB', () => ScreenB);
    Navigation.registerComponent('ScreenC', () => ScreenC);
    Navigation.registerComponent('ScreenD', () => ScreenD);
    Navigation.registerComponent('LoginScreen',() => LoginScreen)
}
export function setRootBottomTabsScreen(){
    const bottomTabs={
        id:'BottomTabsId',
        animate:true,
        children: [{
            stack: {
                children: [{
                    component: {
                        name: 'ScreenA',
                        options: {
                            animation:{
                                setRoot:{
                                    enabled:false,
                                }
                            },
                            bottomTab: {
                                text: '书包',
                                badge:'12',
                                icon: require('./imgs/shubao1_icon.png'),
                                testID: 'FIRST_TAB_BAR_BUTTON',
                                
                                selectedTextColor:'blue'
                            },
                           
                            topBar:{
                                title:{
                                    text:'首页'
                                },
                                height:0,
                                visible:false
                            }
                        },
                        
                    }
                }],

            }
        },
        {
            component: {
                id:'ScreenB',
                name: 'ScreenB',                           
                options: {
                    bottomTab: {
                        text: '衣服',
                        badge: '123',
                        icon: require('./imgs/yifu1_icon.png'),
                        testID: 'SECOND_TAB_BAR_BUTTON',
                        selectedTextColor:'red'
                    },
                }
            }
        },{
            component: {
                name: 'ScreenC',
                options: {
                    bottomTab: {
                        text: '钟表',
                        icon: require('./imgs/zhongbiao1_icon.png'),
                        testID: 'SECOND_TAB_BAR_BUTTON'
                    },
                    
                }
            }
        },{
            component: {
                name: 'ScreenD',
                options: {
                    bottomTab: {
                        text: '玩具',
                        icon: require('./imgs/wanju1_icon.png'),
                        testID: 'SECOND_TAB_BAR_BUTTON'
                    },
                    
                }
            }
        }]
    }
    Navigation.events().registerAppLaunchedListener(()=>{
        Navigation.setRoot({
            root:{
                bottomTabs:bottomTabs,
                component:{
                    options:{
                        animations:{
                            setRoot:{
                                enabled:true,
                                alpha:{
                                    from:0,
                                    to:0,
                                    duration:1000,

                                }
                            }
                        }
                    }
                }
            }
        })
    })
}
export function setRootScreen(){
    Navigation.events().registerAppLaunchedListener(()=>{
        Navigation.setRoot({
            root:{
                stack:{
                    children:[{
                        component:{
                            name:'MainScreen',
                            options:{
                                topBar:{
                                    title:{
                                        text:'首页'
                                    },
                                    height:0,
                                    visible:false
                                }
                            }
                        }
                    }]
                }
            }
        })
    })
}
export function showModalToLogin(){
    Navigation.showModal({
        stack: {
            children: [{
                component: {
                    name: 'LoginScreen',
                    passProps: {
                        text: 'stack with one child'
                    },
                    options: {
                        topBar: {
                            height: 0,
                            title: {
                                text: 'LoginScreen'
                            }
                        }
                    }
                }
            }]
        }
    })
}
