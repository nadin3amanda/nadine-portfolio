import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import nadineLogo from "../assets/brand/nadine_logo.png";
import {
  FaCoffee,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.fb.me/nadineamandaortega/">
          <FaFacebook />
        </Link>
        <Link to="https://www.linkedin.com/in/nadine-amanda-ortega/">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/nadin3amanda">
          <FaGithub />
        </Link>
        <Link to="https://twitter.com/nadin3amanda/">
          <FaTwitter />
        </Link>
        <Link to="https://instagram.com/nadineplays/">
          <FaInstagram />
        </Link>
        <Link to="https://buymeacoffee.com/nadineamanda">
          <FaCoffee />
        </Link>
      </div>
      <div className="copyright">
        <img
          src={nadineLogo}
          alt="Nadine Amanda logo"
          width="46px"
          height="44px"
        />
        <p> &copy; 2022 nadine amanda</p>
      </div>
    </div>
  );
}

export default Footer;
