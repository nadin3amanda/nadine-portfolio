import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <Link to="https://www.linkedin.com/in/nadine-amanda-ortega/">
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/nadin3amanda">
          <GitHubIcon />
        </Link>
        <Link to="https://twitter.com/nadin3amanda/">
          <TwitterIcon />
        </Link>
        <Link to="https://instagram.com/nadineplays/">
          <InstagramIcon />
        </Link>
      </div>
      <p> &copy; 2022 nadine amanda</p>
    </div>
  );
}

export default Footer;
