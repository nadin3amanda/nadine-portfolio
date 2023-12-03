import Reorder from "@material-ui/icons/Reorder";
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
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
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Work</Link>
        <Link to="/about">About</Link>
        <FaMoon onClick={handleThemeSwitch} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
