import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="GitHub logo" />
          <img src={Instagram} alt="Instagram logo" />
          <img src={Linkedin} alt="LinkedIn logo" />
        </div>

        <div className="logo-f">
          <img src={Logo} alt="FitClub logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
