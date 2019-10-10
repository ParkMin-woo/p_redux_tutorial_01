import {createStore} from "redux";

const reducer = (state, action) => {
	console.log("action in index.js : " , action);
	if(action.type === "changeState") {
		return action.payload.newState;
	}
	else {
		return "State";
	}
}

const store = createStore(reducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("store in index.js : " , store);
console.log("store.getState() in index.js : " , store.getState());

const action = {
	type : 'changeState',
	payload : {
		newState : 'New State'
	}
};

store.subscribe(() => console.log("store.getState() : " , store.getState()));

store.dispatch(action);
console.log("store.getState() in index.js : " , store.getState());