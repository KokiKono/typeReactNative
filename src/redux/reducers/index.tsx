import { combineReducers } from 'redux';
import todos from './todos';

export * from './StateModels';
export default combineReducers({
    todos
});
