import {
    ADD_TODO, ToDoListState
} from './types';
import { Reducer } from 'redux';

const initialState: ToDoListState = {
    data: []
};

const reducer: Reducer<ToDoListState> = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                data: [
                    ...state.data
                ,   {
                        id:     action.id
                    ,   title:  action.title
                    ,   body:   action.body
                    }
                ]
            }
        default:
            console.warn('定義されていないアクションタイプです。');
            return state;
    }
}

export { reducer as todosReducer };