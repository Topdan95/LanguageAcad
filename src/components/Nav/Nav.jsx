import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom";
import logo from '../../images/Lannford.svg'

const Nav = () => {
  
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
  </header>
  </>
  )
}

export default Nav