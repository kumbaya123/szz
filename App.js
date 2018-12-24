
import ScreenA from './react-native/screens/ScreenA'
import MainScreen from './react-native/MainScreen';
import ScreenB from './react-native/screens/ScreenB';
import ScreenC from './react-native/screens/ScreenC';
import { Navigation } from 'react-native-navigation';

    Navigation.registerComponent('MainScreen',()=>MainScreen);
    Navigation.registerComponent('ScreenA',()=>ScreenA);
    Navigation.registerComponent('ScreenB',()=>ScreenB);
    Navigation.registerComponent('ScreenC',()=>ScreenC);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'MainScreen'
        }
      }
    });
  });
