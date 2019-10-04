import * as API from "goals-todos-api";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO ='REMOVE_TODO';
export const TOGGLE_TODO ='TOGGLE_TODO';

export function addAction(todo) {
    return {
        type:ADD_TODO,
        todo
    }
}

function removeTodoAction(id) {
    return {
        type:REMOVE_TODO,
        id
    }
}

function toggleTodoAction(id) {
    return {
        type:TOGGLE_TODO,
        id
    }
}

export function handleTodoAction(todo,cb) {
    return (dispatch)=>{
        return  API.saveTodo(todo).then((todo)=>{
            dispatch(addAction(todo))
            cb()
        }).catch(()=>{
            alert("some thing wrong")
        })
    }
}

export function handleRemoveTodoAction(todo) {
    return (dispatch)=>{
        dispatch(removeTodoAction(todo.id))
        return API.deleteTodo(todo.id).catch(()=>{
            dispatch(addAction(todo))
        })
    }
}

export function handleToggleAction(id) {
    return (dispatch)=>{
        dispatch(toggleTodoAction(id))
        return API.saveTodoToggle(id).catch(()=>{
            dispatch(toggleTodoAction(id))
        })
    }
}

