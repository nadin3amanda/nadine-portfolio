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
            <FaHtml5 />
            <FaCss3 />
            <FaSass />
            <FaJs />
            <FaNodeJs />
            <FaNpm />
            <FaYarn />
            <FaGit /> <FaGithub /> <FaCode />
          </li>
          <li className="item">
            <FaWindows />
            <FaApple />
          </li>
          <li className="item">
            <FaWordpress /> <FaElementor />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
