import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import BaseScreen from './BaseScreen';
import { showModalToLogin } from '../screens';
export default class ScreenC extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
                onPress={() => this.onPress()}
            >
                <Text>退出登录</Text>
            </TouchableOpacity>
        )
    }
    onPress() {
        storage.remove('loginData')
        showModalToLogin()
    }
}