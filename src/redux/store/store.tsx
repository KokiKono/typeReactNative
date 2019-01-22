import {
    createStore
,   applyMiddleware
,   compose
} from 'redux';
import {
    compact
} from 'lodash';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

export default function initializeState() {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = compact([
        thunk
    ,   sagaMiddleware
    ,   __DEV__ ? createLogger() : null
    ]);

    const persistConfig = {
        key: 'type_react_native'
    ,   storage
    ,   whitelist: ['todos']
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(
        persistedReducer
    ,   applyMiddleware(...middleware)
    );

    const persistor = persistStore(store);

    return {store, persistor};
}