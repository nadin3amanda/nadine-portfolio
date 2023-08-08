import React from "react";
import "../styles/Home.css";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaGit,
  FaGithub,
  FaCode,
  FaWordpress,
  FaWindows,
  FaApple,
  FaElementor,
  FaYarn,
  FaTrello,
  FaTerminal,
  FaBootstrap,
} from "react-icons/fa";
import { useTheme } from "../components/ThemeProvider";

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
              A creative Front End Developer with a passion for learning and
              designing.
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
