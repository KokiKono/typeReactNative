import * as types from './types';

let nextToDoId = 1;

export const addToDo = (title:string , body: string) => ({
    type:   types.ADD_TODO
,   id:     nextToDoId++
,   title
,   body
});