import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";
import logo from '../../images/Lannford.svg'
import hamburger from '../../images/hamburger.svg'

const Nav = () => {
  const toggleNavbar = () => {
    
    document.querySelector(".mobile-navigations").classList.toggle("toggle-nav");

    window.onscroll = () => {
      document.querySelector(".mobile-navigations").classList.remove("toggle-nav");

  };
};

  return (
  <>
  <header>
    <div className="banner">
        <img src={logo} alt="Lannford" />
    </div>
    <nav className="nav">
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Packages</Link>
        </li>
        <li>
          <Link to="#">Testimonial</Link>
        </li>
        <li>
          <Link to="#">Offer</Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="btn">Sign up</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="mobile-navbar">
      <div className="mobile-container">
        <div className="hamburger">
          <img src={hamburger} alt="hamburger" onClick={toggleNavbar}/>
          <div className="mobile-navigations">
            <div className="sign">
              <div className="signin"><Link to="/signin">Sign In</Link></div>
              <div className="login"><Link to="/login">Log In</Link></div>
              <div className="sign-up"><Link to="/signup">Sign Up</Link></div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </header>
  </>
  )
}

export default Nav