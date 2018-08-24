import React from 'react';
import {Link} from "react-router-dom";
import './Landing.css';

var btnTrigger = localStorage.getItem('id_token');

// export const Container = (props) => (
//   <div className={`container is-fluid ${props.shake ? 'animated' : ''}`}>
//     {props.children}
//   </div>
// );




const LandingBtns = (props) => {
  console.log(localStorage.getItem('id_token'));
  console.log(props);
  if(btnTrigger){
    return(
    <div className = "btnContainer" >
      <Link to="/logout">
        <button type="button" className="btn btn-danger logoutBtn">Logout</button>
      </Link>
      <Link to="/profile/:id">
        <button type="button" className="btn btn-primary homeBtn">Home</button>
      </Link>
    </div>
  )
}else {
  return(
    <div className = "btnContainer" >
      <Link to="/signup">
        <button type="button" className="btn btn-primary signUpBtn">Signup</button>
      </Link>
      <Link to="/login">
        <button type="button" className="btn btn-danger loginBtn">Login</button>
      </Link>
  </div>
  )
}
}

export default LandingBtns;