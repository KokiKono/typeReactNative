import {
    ADD_TODO
} from '../actions';


const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state
            ,   {
                    id:     action.id
                ,   title:  action.title
                ,   body:   action.body
                }
            ];
        default:
            console.warn('定義されていないアクションタイプです。');
            return [
                {
                    id: 0
                ,   title:  'initial title'
                ,   body:   'initial body'
                }
            ];
    }
}

export default todos;