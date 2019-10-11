// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {combineReducers, createStore} from "redux";
// import {Provider} from "react-redux";
// import {productReducer} from "./redux/reducers/product";
// import {userReducer} from "./redux/reducers/user";
// import {allReducers} from "./redux/reducers";
// import {store} from "./redux/store";
// import {updateUser} from "./redux/actions";
import {updateUser} from "./redux/action";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import App from "./App";

console.log("store.getState()1 : " , store.getState());

// store.subscribe(() => console.log("store.getState()2 : " , store.getState()));



ReactDOM.render(
	<Provider store={store}><App></App></Provider>,
	document.getElementById('root')
);

// store.dispatch(updateUser);