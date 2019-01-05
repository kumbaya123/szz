import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import PropTypes from 'prop-types';
export default class BottomTabCell extends Component {

    static propTypes = {
        goToPage: PropTypes.func, // 跳转到对应tab的方法 
        activeTab: PropTypes.number, // 当前被选中的tab下标 
        tabs: PropTypes.array, // 所有tabs集合 
    };
    componentDidMount() { // Animated.Value监听范围 [0, tab数量-1] 
        this.props.scrollValue.addListener(this.setAnimationValue);
    }
    setAnimationValue({ value }) {
        console.log('动画值：' + value);
    }

    render() {
        return (
            <View style={styles.tabs}>{/*遍历。系统会提供一个tab和下标 调用一个自定义的方法*/}
                {this.props.tabs.map((item, index) => this.renderTabOption(item, index))}
            </View>
        );
    }

    renderTabOption(item, index) {
        let color = this.props.activeTab == index ? "#FF3399" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色 
        let icon = this.props.activeTab == index ? this.props.data[index].selectedIcon : this.props.data[index].icon
        return (
            <TouchableOpacity
                onPress={() => this.props.goToPage(index)}
                style={styles.tab} key={item}
            >
                <View style={styles.tabItem}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={icon}
                    />
                    <Text style={{ color: color }}>
                        {this.props.data[index].text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 70,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
}); 
