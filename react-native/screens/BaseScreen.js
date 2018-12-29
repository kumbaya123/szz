import React,{Component} from 'react'
import { Navigation } from 'react-native-navigation';

export default class BaseScreen extends Component{
    constructor(props){
        super(props);
        Navigation.events().bindComponent(this);
        // Navigation.events().registerComponentDidAppearListener(({componentId,componentName})=>{
        //     console.log('componentId = '+componentId);
        //     console.log('componentName = '+componentName);
        // })
    }
    componentDidAppear(){
        console.log('componentDidAppear');
    }
    componentDidDisappear(){
        console.log('componentDidDisappear');
    }
    // componentWillUnmount(){
    //     console.log('componentDidAppear');
    // }
    // componentDidAppear(){
    //     console.log('componentDidAppear');
    // }
}