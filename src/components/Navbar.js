import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import nadineLogo from "../assets/brand/nadine_logo.png";
import { useTheme } from "../components/ThemeProvider";
import "../styles/Navbar.css";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const { handleThemeSwitch } = useTheme();

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="logo">
        <img
          src={nadineLogo}
          alt="Nadine Amanda logo"
          width="76px"
          height="74px"
        />
      </div>
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
        <FaMoon onClick={handleThemeSwitch} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
