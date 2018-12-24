import { Navigation } from "react-native-navigation";
import ScreenA from './screens/ScreenA'
import ScreenB from './screens/ScreenB'
import ScreenC from './screens/ScreenC'

import MainScreen from "./MainScreen";
export function registerScreens() {

    Navigation.registerComponent('MainScreen',()=>MainScreen);
    Navigation.registerComponent('ScreenA',()=>ScreenA);
    Navigation.registerComponent('ScreenB',()=>ScreenB);
    Navigation.registerComponent('ScreenC',()=>ScreenC);

}
    // global.AppScreens = AppScreens

    // Navigation.events().registerAppLaunchedListener(()=>{
    //     Navigation.setRoot({
    //         root: {
    //             stack: {
    //                 children: [{
    //                     component: {
    //                         name: 'App',
    //                         options: {
    //                             topBar: {
    //                                 title: {
    //                                     text: 'App'
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }]
    //             }
    //         }
    //     })
    // })
