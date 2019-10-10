import {combineReducers, createStore} from "redux";

const productReducer = (state = [], action) => {
	return state;
}

const userReducer = (state = '', action) => {
	if(action.type === "updateUser") {
		return action.payload;
	}
	else {
		return state;
	}
}

const allReducers = combineReducers(
	{
		products : productReducer,
		user : userReducer,
	}
);

const store = createStore(allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log("store.getState()1 : " , store.getState());

// user를 update하는 action을 dispatch
const userUpdate = {
	type : "updateUser",
	payload : "KIM SOOYOUNG",
};

store.subscribe(() => console.log("store.getState()2 : " , store.getState()));

store.dispatch(userUpdate);