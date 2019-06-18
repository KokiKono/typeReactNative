import {
    NavigationRouteConfig
,   createStackNavigator
} from 'react-navigation';
import {
    HomeScreen
,   AccountScreen
,   SettingScreen
,   AddScreen
} from '../screens';

import * as Screens from './Screens';

const routeConfigMap: NavigationRouteConfig = {};

routeConfigMap[Screens.HOME] = {
    screen: HomeScreen
};
routeConfigMap[Screens.ADD_TODO] = {
    screen: AddScreen
};
routeConfigMap[Screens.ACCOUNT] = {
    screen: AccountScreen
};
routeConfigMap[Screens.SETTING] = {
    screen: SettingScreen
}
const AppNavigator = createStackNavigator(
    routeConfigMap
,   {
        initialRouteName: Screens.HOME
    }
);
export default AppNavigator;
