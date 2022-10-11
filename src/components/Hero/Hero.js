import React from "react";
import "./Hero.css";
import female from '../../images/female.png'
import arrow from '../../images/arrow.svg'

const Hero = () => {
  return (
    <main className="hero">
      <div className="item item1">
        <h3>Earn over <span>$500</span> Monthly</h3>
        <h4><span>LEARN AND EARN</span><br />BECOME OUR LANGUAGE AMBASSADOR</h4>
        <p>
            Our online education platform is a fully functional learning<br />
            place consisting of virtual class,e-library,testing/assessment<br />
            modus and others.It is an interactive medium where students<br />
            can engage the teachers just from the comfort of their homes.
        </p>
        <div className="text">
        <button className="btn2">Join Now</button>
        <img src={arrow} alt="An arrow" />
        </div>
      </div>
      <div className="item item2">
        <img src={female} alt="A female student" />
      </div>
    </main>
  )
}

export default Hero