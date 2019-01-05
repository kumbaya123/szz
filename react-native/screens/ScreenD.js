import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import BaseScreen from './BaseScreen';
export default class ScreenD extends Component {
    render() {
        return (
            <View style={{height:700,justifyContent: 'center', alignItems: 'center',}}>
                <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', height:50,}}
                onPress={() => this.onPress()}
            >
                <Text>{global.content.id}</Text>
            </TouchableOpacity>
            </View>

            
        )
    }
    onPress() {
        // Navigation.popToRoot(this.props.componentId)
        Navigation.dismissOverlay(this.props.componentId)
    }
}