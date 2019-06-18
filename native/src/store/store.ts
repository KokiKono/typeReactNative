import { compact } from 'lodash';
import {
    createStore
,   applyMiddleware
,   combineReducers
,   Reducer,
AnyAction
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer, PersistPartial, PersistConfig } from 'redux-persist';
import { ReducerState } from 'react-navigation-redux-helpers';
import storage from 'redux-persist/lib/storage';

import { ToDoListState, todosReducer } from './todos';
import {navigationReducer, navigationMiddleware} from '../navigation/ReduxNavigation';

export interface ApplicationState {
    navigation: ReducerState
,   todo_list: ToDoListState & PersistPartial
}

export const createAppStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    const middleware = compact([
        thunk
    ,   sagaMiddleware
    ,   __DEV__ ? createLogger() : null
    ,   navigationMiddleware
    ]);

    const persistConfig: PersistConfig = {
        key: 'type_react_native.todo_list'
    ,   storage
    ,   whitelist: ['data']
    };

    const todoListPersistedReducer = persistReducer<ToDoListState, AnyAction>(persistConfig, todosReducer);
    const appReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
        navigation: navigationReducer
    ,   todo_list: todoListPersistedReducer
    });

    const store = createStore(
        appReducer
    ,   applyMiddleware(...middleware)
    );

    const persistor = persistStore(store);

    return {store, persistor};
}
