import React from "react";
import {
  FaApple,
  FaBootstrap,
  FaCode,
  FaCss3,
  FaElementor,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
  FaTerminal,
  FaTrello,
  FaWindows,
  FaWordpress,
  FaYarn,
} from "react-icons/fa";
import { useTheme } from "../components/ThemeProvider";
import "../styles/Home.css";

function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`h-screen ${
        theme === "dark" ? "dark" : "light"
      } flex justify-center items-center`}
    >
      <div className="home">
        <div className="about">
          <h2> Hi, My Name is Nadine</h2>
          <div className="prompt">
            <p>
              Pixel Perfectionist & Your Go-To UI/UX Alchemist: Crafting User
              Experiences with a Decade of Design, Debugging, and the Iced
              Coffee shaking.
            </p>
          </div>
        </div>
        <div className="skills">
          <h1> Technologies </h1>
          <ol className="list">
            <li className="item">
              <FaReact />
              {/* Next */}
              <FaHtml5 />
              <FaCss3 />
              <FaSass />
              {/* Tailwind */}
              {/* Styled Components */}
              <FaJs />
              {/* Typescript */}
              <FaNodeJs />
              <FaNpm />
              <FaYarn />
              <FaGit />
              <FaTerminal />
              <FaBootstrap />
              <FaGithub />
              <FaTrello />
              <FaCode />
              <FaWindows />
              <FaApple />
              <FaWordpress /> <FaElementor />
              {/* Canva  */}
              {/* Photoshop  */}
              {/* Illustrator */}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
