import React from "react";
import logo from "../../Images/ICON/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__top">
        <li className="footer__top--item me-auto">
          <img src={logo} alt="" />
        </li>
        <li className="footer__top--item">
          <a href="/">About online food</a>
          <a href="/">Read our blog</a>
          <a href="/">Sign up to deliver</a>
          <a href="/">Add your restaurant</a>
        </li>
        <li className="footer__top--item">
          <a href="/">Get help</a>
          <a href="/">Read FAQ's</a>
          <a href="/">View all cities</a>
          <a href="/">Restaurants near me</a>
        </li>
      </ul>

      <ul className="footer__bottom">
        <li className="footer__bottom--item me-auto">
          &copy; 2021 Online Food.
        </li>
        <li className="footer__bottom--item">
          <a href="/">Privacy & Policy</a>
        </li>
        <li className="footer__bottom--item">
          <a href="/">Terms & Conditions</a>
        </li>
        <li className="footer__bottom--item">
          <a href="/">Pricing</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
