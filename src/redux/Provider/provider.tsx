import React from 'react';
import { Provider } from 'react-redux';
import createStore  from '../store';

let store;

interface Props {
    children: React.Component
}
class AppStoreProvider extends React.PureComponent {
    getChildContext() {
        return {
            store,
        };
    }
    static childContextTypes = {
        store: Object
    }
    render() {
        const { children } = this.props;
        store = store || createStore();
        return (
            <Provider store={store}>
                {children}
            </Provider>
        );
    }
}

export default AppStoreProvider;