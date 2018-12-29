import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import BaseScreen from './BaseScreen';
export default class ScreenC extends BaseScreen {
    render() {
        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
                onPress={() => this.onPress()}
            >
                <Text>this is ScreenD</Text>
            </TouchableOpacity>
        )
    }
    onPress() {
        Navigation.popToRoot(this.props.componentId)
    }
}