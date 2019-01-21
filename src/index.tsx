import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { setUp } from './navigation/Navigation';

// Ignore yellow box
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader requires main queue setup since it overrides `init` but doesn\'t implement `requiresMainQueueSetup`. In a future release React Native will default to initializing all native modules on a background thread unless explicitly opted-out of.',
    'Could not find image',
    'RCTBridge required dispatch_sync',
    'Required dispatch_sync to load constants',
]);

Navigation.events().registerAppLaunchedListener(() => {
    setUp();
});