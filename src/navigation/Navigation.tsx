import { Navigation } from 'react-native-navigation';

import {
    HOME_SCREEN
,   ACCOUNT_SCREEN
,   SETTING_SCREEN
} from './Screens';
import registerScreens from './registerScreens';

registerScreens();

const HomeComponent = {
    stack: {
        children: [{
            component: {
                name: HOME_SCREEN
            ,   options: {
                    topBar: {
                        title: {
                            text: 'ホーム'
                        }
                    }
                }
            }
        }]
    ,   options: {
            bottomTab: {
                text: 'ホーム'
            }
        }
    }
};
const AccountComponent = {
    stack: {
        children: [{
            component: {
                name: ACCOUNT_SCREEN
            }
        }]
    ,   options: {
            bottomTab: {
                text: 'アカウント'
            }
        }
    }
};
const SettingComponent = {
    stack: {
        children: [{
            component: {
                name: SETTING_SCREEN
            }
        }]
    ,   options: {
            bottomTab: {
                text: '設定'
            }
        }
    }
};

export function setUp() {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [HomeComponent, AccountComponent, SettingComponent]
            }
        }
    });
}