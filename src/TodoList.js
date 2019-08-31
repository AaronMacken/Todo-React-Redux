import React, { Component } from 'react'
import Todo from './Todo';

// this statement connects our react state with the redux store
import { connect } from 'react-redux';
// get our action creators from the created file
import {addTodo, updateTodo, removeTodo} from './actionCreator';
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // dispatch the state value from the input box & reset the input box
        this.props.addTodo(this.state.task);

        this.setState({
            task: ""
        })
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    // function that will send the remove todo dispatch with the passed in ID from the bound element
    // passed in as a prop to the component and used as an on click
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    updateTodo(todo) {
        debugger
        this.props.updateTodo(todo)
    }


    // component now has access to a dispatch prop,
    // ---- NEXT ----> SEEING HOW TO GET STATE FROM REDUX STORE
    render() {
        let todos = this.props.todos.map((e, ind) => (
            // passing in removeTodo fn as a prop & binding it to the element that was rendered
            // while also passing in the element's ID used in the FN
            <Todo 
            removeTodo={this.removeTodo.bind(this, e.id)}
            updateTodo={this.updateTodo.bind(this, e)}
            task={e.task} key={ind} completed={e.completed} />
        ))
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Enter a task: </label>
                    <input type="text" autoComplete="off" required name="task" id="task" value={this.state.task} onChange={this.handleChange}></input>
                    <button type="submit">Add a task!</button>
                </form>
                <ul>
                    {todos}
                </ul>

            </div>
        )
    }
}

// must take in reduxState as a param and return an object
// the name for the function is arbitrary, but it takes the redux state and maps it to our components props
function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}



// connecting our component to the redux store, the store is defined in the Provider component on the index.js file
// which defines which store we are connecting to
// after we are all connected, the REDUX STATE is now available as PROPS for this component
// now that the component is linked up, it has the ability to dispatch actions to the redux store


// map dispatch to props FN is used for passing in actions for components to dispatch, available to the component
// as props

// now instead of calling this.props.dispatch and passing in an action, you can just use the function names
// the second param takes our actionCreator functions for functions that mapDispatchToProps will use
export default connect(mapStateToProps, {addTodo, updateTodo, removeTodo})(TodoList);

