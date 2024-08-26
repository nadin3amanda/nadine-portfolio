import React from "react";
import "../styles/Home.css";
import SoarLanding from "../assets/iMac_Front-Soar Landing Page.png";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider";

export default function HomeProjects() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div id="project-container-1">
        <Link
          to="https://nadine-dev-portfolio.my.canva.site/soar-earth-landing-page-by-nadine-amanda"
          target="_blank"
          rel="nofollow"
        >
          <img
            id="soar-landing"
            src={SoarLanding}
            alt="Soar Landing Page mockup"
          />
        </Link>
        <div className="description">
          <h6>Soar Earth Landing Page</h6>
          <span>UI/UX, Interaction, Web Development</span>
        </div>
      </div>
      <Link to="/projects">
        <button className="more-button">More</button>
      </Link>
    </div>
  );
}
