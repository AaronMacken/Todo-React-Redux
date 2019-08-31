// File that exports actions for our root reducer to use so
// we dont have to hard code the action objects each time whe want to use them

// if ever we need to change the name of the action,
// it only has to be changed here, and not multiple times


export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(task){
    return {
        type: ADD_TODO,
        task
    }
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        todo
    }
}

export function removeTodo(id){
    return {
        type: REMOVE_TODO,
        id
    }
}