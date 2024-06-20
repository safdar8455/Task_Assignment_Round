import React from 'react';
import './Footer.css';
import linkedin from "../../assets/linkedin.png";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram logo..png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h1>VAST COMMUNITY OF STUDENTS</h1>
      </div>
      <div className="footer-stats">
        <div className="stat-block">
          <p>2.5K+</p>
          <img src={instagram} alt="Instagram" className="Instagram" />
        </div>
        <div className="stat-block">
          <p>50K+</p>
          <img src={telegram} alt="telegram" className="telegram" />
        </div>
        <div className="stat-block">
          <p>29K+</p>
          <img src={linkedin} alt="Linkedin" className="Linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Footer;
