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

function Home() {
  return (
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
        <h1> Skills</h1>
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
          </li>
          <li className="item">
            <FaWindows />
            <FaApple />
          </li>
          <li className="item">
            <FaWordpress /> <FaElementor />
            {/* Canva  */}
            {/* Photoshop  */}
            {/* Illustrator */}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
