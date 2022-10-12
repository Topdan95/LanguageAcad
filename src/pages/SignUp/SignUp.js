import React from 'react';
import "./SignUp.css";
import portrait from "../../images/handsome.svg";
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <>
    <div className="signs">
      <div>
        <div className="sign-up">
          <h5>Create your FREE Account</h5>
          <p>Have an account? <span><Link to="/signin">Sign in</Link></span></p>
          <h6>Register as an Ambassador</h6>
        </div>
        <div className="full">
          <p>Full Name</p>
          <input type="text" />
        </div>
        <div className="full">
          <p>Email Address</p>
          <input type="text" />
        </div>
        <div className="full">
          <p>Enter password</p>
          <input type="text" />
        </div>
        <div className="now">
          <div>
          <p>Date of Birth</p>
          <input type="text" />
          </div>
          <div>
          <p>Sex</p>
          <input type="text" />
          </div>
        </div>
        <div className="now">
          <div>

          <p>Phone Number</p>
          <input type="text" />
          </div>
          <div>

          <p>Country</p>
          <input type="text" />
          </div>
        </div>
      </div>

        <div className="best">
          <h4>"The Best way<br />to Earn is to<br />Learn"</h4>
          <img src={portrait} alt="Handsome guy" />
          <p>Language Academy</p>
        </div>
    </div>
    </>
  )
}

export default SignUp