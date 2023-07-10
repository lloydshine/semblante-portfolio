import React from "react";
import "./footer.css";
import logo from "../../logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
          <img src={logo} alt='logo'/>
        </div>
      <div className="footer-links">
        <p>Links</p>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#who">Who?</a>
        </p>
        <p>
          <a href="#services">Services</a>
        </p>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
      <div className="footer-links">
        <p>Get in touch</p>
        <p>Fuentes Maria Cristina Iligan City</p>
        <p>09350841574</p>
        <p>semblantelloyd500@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
