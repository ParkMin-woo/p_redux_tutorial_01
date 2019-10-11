import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/action";

function App(props) {
  console.log("props in App : " , props);
  return(
    <div className = "App">
      <p>DEMO_Redux</p>
      <p>{props.user}</p>
      <button onClick = {() => props.updateUser("KIM SOOYOUNG")}>액션 디스패치</button>
    </div>
  );
}

// store의 state를 props로 mapping함.
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  products : state.products,
  user : state.user,
});

const mapActionToProps = (dispatch) => ({
  updateUser : (name) => dispatch(updateUser(name))
});

// export default connect(mapStateToProps , mapActionToProps)(App);
export default connect(mapStateToProps , {updateUser})(App);