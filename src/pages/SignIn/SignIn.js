import React from "react";
import classes from "./SignIn.module.css";
import character from "../../images/Character.svg";
import Lann from "../../images/Lannford.svg";
import line from "../../images/Line.svg";
import envelope from "../../images/envelope.svg";
import lock from "../../images/lock.svg";
import view from "../../images/view.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={classes.sings}>
      <div className={classes.item1}>
        <div className={classes.sang}>
          <img src={character} alt="A guy" />
        </div>
      </div>
      <div className={classes.item2}>
        <div className={classes.item2Head}>
          <Link to="/">
            <img src={Lann} alt="logo" />
          </Link>
          <div className={classes.item2Text}>
            <h5>Welcome Back</h5>
            <p>
              Don’t have an account?
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
        <div className={classes.item2Form}>
          <div className={classes.btns}>
            <button>Sign in with Google</button>
            <button className={classes.button2}>Sign in with Facebook</button>
          </div>
          <div className={classes.line}>
            <img src={line} alt="a line" />
            <p>or</p>
            <img src={line} alt="a line" />
          </div>
          <div className={classes.text}>
            <div>
              <p>Email address</p>
              <div className={classes.input1}>
                <img src={envelope} alt="An envelope" />
                <input type="text" placeholder="johnkent@acad.com" />
              </div>
            </div>
            <div>
              <p>Password</p>
              <div className={classes.input2}>
                <div>
                  <img src={lock} alt="A lock" />
                  <input type="password" placeholder="******************" />
                </div>
                <div className={classes.input3}>
                  <img src={view} alt="An eye" />
                </div>
              </div>
            </div>
            <div className={classes.texxt}>
              <p>
                <Link to="/forgotpassword">Forget password?</Link>
              </p>
              <button className={classes.bttn}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
