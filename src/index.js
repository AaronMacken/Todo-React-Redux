import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// BrowserRouter - React router
// createStore - Redux store 
// rootReducer - File created to handle redux state management logic
// Provider - used to connect the react application to the redux store
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'; // destructured version of: Redux.createStore 
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';

// create redux store using reducer file. Second param is for chrome dev tools
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    // the provider is the top level component
    // pass in store as a prop which is == to the redux store created above
    // child components can now dispatch actions to redux store
    // browser router wrapps the application to use react router
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
