import React from "react";
import "./Review.css";
import pitch from "../../images/pitch.svg";
import strategy from "../../images/strategy.svg";
import app from "../../images/app.svg";
import website from "../../images/website.svg";
import profile from "../../images/profile.svg";

const Review = () => {
  return (
    <section className="review">
      <div className="reviewed">
        <div className="rev reviewer">
          <img src={strategy} alt="marketing" />
        </div>
        <div className="rev reviewee">
          <img src={pitch} alt="shape" />
        </div>
        <div className="rev reviewees">
          <img src={app} alt="shape" />
        </div>
        <div className="rev revieweers">
          <img src={website} alt="shape" />
        </div>
        <div className="rev revieweerrs">
          <img src={profile} alt="shape" />
        </div>
        <div className="revs reviewers">
          <h4>Doubting? Hear from others</h4>
          <p>
            Do you require some help for your project: Conception workshop,
            <br />
            prototyping, marketing strategy, landing page, Ux/UI?
          </p>
          <button className="but">Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default Review;
