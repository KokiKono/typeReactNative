import React from 'react';
import { Provider } from 'react-redux';
import createStore  from '../store';

import { PersistGate } from 'redux-persist/integration/react';

class AppStoreProvider extends React.PureComponent {
    render() {
        const { children } = this.props;
        const { store, persistor } = createStore();
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        );
    }
}

export default AppStoreProvider;