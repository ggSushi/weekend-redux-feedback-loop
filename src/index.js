import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// reducers go here
// TODO feeling reducer
const feelingInput = (state = 0, action) => {
    if (action.type === 'SET_FEELING_RATING') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0
    }
    return state;
}

// TODO understanding reducer
const understandingInput = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING_RATING') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
}

// TODO support reducer
const supportInput = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT_RATING') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
}

// TODO comment reducer
const commentInput = (state = '', action) => {
    if (action.type === 'SET_COMMENT') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}



const storeInstance = createStore(
    combineReducers(
        {
            //  combine reducers here
            feelingInput,
            understandingInput,
            supportInput,
            commentInput
        }
    ),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
           <App /> 
        </Provider>
    </React.StrictMode>
);
