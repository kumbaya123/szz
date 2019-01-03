import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import BaseScreen from './BaseScreen';
import { Navigation } from 'react-native-navigation';
export default class ScreenA extends Component {
    render() {
        return (
            <View
                style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}
                // onPress={() => this.onPress()}
            >
                <Text>this is ScreenA</Text>
            </View>
        )
    }
    onPress() {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'ScreenB',
              options: {
                customTransition: {
                  animations: [
                    { type: 'sharedElement', fromId: 'image1', toId: 'image2', startDelay: 0, springVelocity: 0.2, duration: 0.5 }
                  ],
                  duration: 0.8
                }
              }
            }
          });
        // Navigation.push(this.props.componentId, {
        //     component: {
        //         name: 'ScreenB',
        //         options: {
        //             //    bottomTabs:{visible:true}
        //             layout: {
        //                 backgroundColor: 'white',
        //                 // topMargin:500,
        //             },
        //             animations: {

        //             },
        //             topBar: {
        //                 title: {
        //                     text: 'ScreenB'
        //                 },
        //                 // subtitle:{//
        //                 //     text:'aaa'
        //                 // }
        //             },
        //             backButton: {
        //                 title: '返回'
        //             },
        //             // animations:{
        //             //     push:{
        //             //         content:this.props.componentId
        //             //     }
        //             // }
        //         }
        //     },

        // })
    }
}