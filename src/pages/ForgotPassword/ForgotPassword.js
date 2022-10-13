import React from "react";
import Padlock from "../../images/Padlock.svg";
import envelope from "../../images/envelope.svg";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgotPassword">
      <img src={Padlock} alt="password reset" />
      <h3>Password Reset</h3>
      <p>
        Enter your Email and click on the link provided or write the code here
      </p>
      <div className="form-reset">
        <div className="input">
          <input type="email" />
          <img src={envelope} alt="message" />
        </div>
        <button className="btn_pry btn">Enter</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
