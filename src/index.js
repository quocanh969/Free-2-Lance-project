import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducer';
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
    apiKey: "AIzaSyD66tXrVTHj4oB6R1Arx6IYkOBcPhlbE6Q",
    authDomain: "free2lance-60aff.firebaseapp.com",
    databaseURL: "https://free2lance-60aff.firebaseio.com",
    projectId: "free2lance-60aff",
    storageBucket: "free2lance-60aff.appspot.com",
    messagingSenderId: "498635014601",
    appId: "1:498635014601:web:60021bf38b1f3f48092818",
    measurementId: "G-L3QJEBDJP2"
});
export const MyStore = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
    )
)

ReactDOM.render(
    
    <Provider store={MyStore}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
