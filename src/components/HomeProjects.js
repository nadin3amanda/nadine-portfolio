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
      <div id="project-container-2">
        <Link to="/" target="_blank" rel="nofollow">
          <img
            id="itadakimasu-app"
            src={
              "https://live.staticflickr.com/65535/53948511181_888e9dc3ab_z.jpg"
            }
            alt="itadakimasu app"
          />
        </Link>
        <div className="description">
          <h6>Itadakimasu Food App</h6>
          <span>UI/UX, Concept, Customer Journey, Prototype,</span>
        </div>
      </div>
      <div id="project-container-3">
        <Link to="https://reviewology.com/wellness-topics/why-moisturizers-are-important/" target="_blank" rel="nofollow">
        <img
          id="reviewology"
          src={
            "https://live.staticflickr.com/65535/53948526846_6bf4df7e5f_z.jpg"
          }
          alt="reviewology blog -skin care"
        />
        </Link>
        <div className="description">
          <h6>Reviewology - Blog SIte</h6>
          <span>UI/UX, Web Development</span>
        </div>
      </div>
      <Link to="/projects">
        <button className="more-button">More</button>
      </Link>
    </div>
  );
}
