import React from 'react';
import './Footer.css';
import log from '../../images/lanford.svg';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="content">
              <img src={log} alt="logo" />
            </div>
            <div className="infos foot">
            <div className="info information">
              <ul>
                <li>About Us</li>
                <li>Responsibilities</li>
                <li>Our Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="info informations">
              <ul>
                <li>Disclaimer</li>
                <li>Testimonials</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            </div>
          <div className="socials">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
        </div>
    </footer>
  )
}

export default Footer