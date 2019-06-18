import React from 'react';
import { BackHandler } from "react-native";
import { NavigationState, NavigationDispatch ,NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { createReactNavigationReduxMiddleware, reduxifyNavigator, createNavigationReducer } from 'react-navigation-redux-helpers';

import * as Sceens from './Screens';
import AppNavigator from './AppNavigator';

export type NavigationReduxState = {
    navigation: NavigationState
,   dispatch:   NavigationDispatch
}
const navigationMiddleware = createReactNavigationReduxMiddleware<NavigationReduxState>(
    Sceens.HOME
,   (state: NavigationReduxState) => state.navigation
);
const navigationReducer = createNavigationReducer(AppNavigator);

const AppReduxNavigator = reduxifyNavigator(AppNavigator, Sceens.HOME);
const mapStateToProps = (state: NavigationReduxState) => ({
    navigation: state.navigation
,   dispatch: state.dispatch
});

class ReduxNavigation extends React.PureComponent<NavigationReduxState> {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
          return false;
        }
    
        dispatch(NavigationActions.back());
        return true;
    };
    
    render() {
        const { dispatch, navigation } = this.props;
        return <AppReduxNavigator dispatch={dispatch} state={navigation} />;
    }
}

const AppWidthNavigationState = connect(mapStateToProps)(ReduxNavigation);

export default AppWidthNavigationState;
export { navigationMiddleware, navigationReducer};