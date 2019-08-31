import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// connect react to redux

// get createStore function from redux
import { createStore } from 'redux'; // destructured version of: Redux.createStore 

// get our reducer function from our rootReducer file
import rootReducer from './rootReducer';

// Provider connects the react application with the redux store
// this is done by wrapping the application component in a provider component
import { Provider } from 'react-redux';

// create the store, second param is for chrome dev tools extension
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    // pass into the provider component a store prop that uses our store const
    // by wrapping the app, any child component has access to the redux store
    // now all components will be able to dispatch actions, instead of only the 
    // store being able to! (:
    <Provider store={store}>
         <App />
    </Provider>
   
    , document.getElementById('root'));
