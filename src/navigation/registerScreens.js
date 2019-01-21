import { Navigation } from 'react-native-navigation';

import {
    HomeScreen
,   AccountScreen
,   SettingScreen
} from '../screens';

import {
    HOME_SCREEN
,   ACCOUNT_SCREEN
,   SETTING_SCREEN
} from './Screens';
import { Provider } from '../redux/Provider';

function WrappedComponent(Component) {
    console.log('component', Component)
    return function inject(props) {
        const  EnhancedComponent = () => (
            <Provider>
                <Component
                    {...props}
                />
            </Provider>
        );
        return EnhancedComponent;
    }
}

export default function() {
    // Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(HomeScreen));
    // Navigation.registerComponent(ACCOUNT_SCREEN, () => WrappedComponent(AccountScreen));
    // Navigation.registerComponent(SETTING_SCREEN, () => WrappedComponent(SettingScreen));
    Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
    Navigation.registerComponent(ACCOUNT_SCREEN, () => AccountScreen);
    Navigation.registerComponent(SETTING_SCREEN, () => SettingScreen);
    
    console.info('All screens have been registered...');
}