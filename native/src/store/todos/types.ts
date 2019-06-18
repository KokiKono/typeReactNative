export interface ToDoState {
    id: number
,   title: string
,   body: string
};

export interface ToDoListState{
    data: Array<ToDoState>
};

export const GET_TODOS      = 'GET_TODOS';
export const ADD_TODO       = 'ADD_TODO';
export const EDIT_TODO      = 'EDIT_TODO';
export const DELETE_TODO    = 'DELETE_TODO';