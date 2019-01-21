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
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore } from 'redux-persist';

export default function initializeState() {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = compact([
        thunk
    ,   sagaMiddleware
    ,   __DEV__ ? createLogger() : null
    ]);

    let debuggWrapper = data => data;
    if (__DEV__) {
        debuggWrapper = composeWithDevTools({ realtime: true, port: 8000 });
    }

    const store = createStore(
        null
    ,    {}
    ,   debuggWrapper(compose(applyMiddleware(...middleware)))
    );

    persistStore(
        store
    ,   null
    ,   () => {
            store.getState();
        }
    );

    return store;
}