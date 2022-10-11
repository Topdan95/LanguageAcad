import React from 'react';
import "./SignUp.css";
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <div className="signs">
        <div className="sign sign-up">
          <h5>Create your FREE Account</h5>
          <p>Have an account? <span><Link to="/signin">Sign in</Link></span></p>
          <h6>Register as an Ambassador</h6>
        </div>
        <div className="search">
          <input type="text" placeholder=" " />
        </div>
    </div>
    </>
  )
}

export default SignUp