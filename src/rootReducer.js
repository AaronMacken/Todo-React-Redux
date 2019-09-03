// load in the actions from the actionCreator file
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './actionCreator';

// set the initial redux state of the application
const initialState = {
    todos: [],
    id: 0
}


// root reducer function that manages state
export default function rootReducer(state = initialState, action) {
    // switch statement based off of action type's value
    switch (action.type) {
        case ADD_TODO:
            let newAddedState = { ...state };
            newAddedState.id++;
            return {
                ...newAddedState,
                todos: [...newAddedState.todos, 
                    { task: action.task,
                        id: newAddedState.id,
                    completed: false }]
            }
        case UPDATE_TODO:
            // create a copy of the existing state by mapping through
            let updatedTodos = state.todos.map((element) => {
                // if the ID's match based off of the passed in element, change that completed state to the opposite 
                // of what it previously was
                if(element.id === action.todo.id) {
                    element.completed = !element.completed
                    return element
                }
                return element
            })
            // return the new state object
            return {
                ...state,
                todos: updatedTodos
            }

        case REMOVE_TODO:
            let todos = state.todos.filter((val => val.id !== action.id))
            return {
                ...state,
                todos
            }

        default:
            return state
    }
}