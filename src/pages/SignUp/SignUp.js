import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";

const SignUp = () => {
  return (
    <>
      <div className="signs">
        <div className="forms">
          <div className="sign-up">
            <h5>Create your FREE Account</h5>
            <p>
              Have an account?{" "}
              <span>
                <Link to="/signin">Sign in</Link>
              </span>
            </p>
            <h6>Register as an Ambassador</h6>
          </div>
          <div className="full">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" />
          </div>
          <div className="full">
            <label htmlFor="email">Email Address</label>
            <input type="text" />
          </div>
          <div className="full">
            <label htmlFor="password">Enter Password</label>
            <input type="text" />
          </div>
          <div className="now">
            <div>
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" />
            </div>
            <div>
              <label htmlFor="sex">Sex</label>
              <select>
                <option value="gender">Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="now">
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input type="text" />
            </div>
          </div>

          <p>
            <input type="checkbox" />I agree to Language Academy{" "}
            <span className="text_pry">Terms</span> and{" "}
            <span className="text_pry">Conditions</span>
          </p>
          <button className="btn_pry btn">Sign up</button>

          <div className="divider">
            <div className="line"></div>
            <div className="or">or</div>
            <div className="line"></div>
          </div>
          <div className="socials">
            <img cclassName="social1" src={google} alt="google" />
            <img className="social2" src={facebook} alt="facebook" />
          </div>
        </div>

        <div className="best">
          <h4>
            "The Best way
            <br />
            to Earn is to
            <br />
            Learn"
          </h4>
          <p>Language Academy</p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
