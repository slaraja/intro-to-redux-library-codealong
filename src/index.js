// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

//passes a reducer to the method
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

//passes createStore() method to our App comp as a prop
ReactDOM.render(
<App store={store} />,
document.getElementById("root")
)