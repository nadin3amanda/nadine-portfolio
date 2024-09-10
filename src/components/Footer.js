import React from "react";
import { FaCoffee, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import nadineLogo from "../assets/brand/nadine_logo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.linkedin.com/in/nadine-ortega/">
          <FaLinkedin />
        </Link>
        <Link to="https://github.com/nadin3amanda">
          <FaGithub />
        </Link>
        <Link to="https://threads.net/@nadineplays">
          <FaThreads />
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
        <span>designed and coded by nadine amanda &copy; 2024</span>
      </div>
    </div>
  );
}

export default Footer;
