import React from "react";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import {
  FaApple,
  FaBootstrap,
  FaCode,
  FaCss3,
  FaElementor,
  FaFigma,
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
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import {
  SiAsana,
  SiCanva,
  SiClickup,
  SiMiro,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";

function Technologies() {
  return (
    <div className="skills">
      <h3>Technologies</h3>
      <div className="all-tools">
        <div className="tools-col">
          <h5>Development</h5>
          <ol className="tools-grid">
            <li className="tools-dev">
              <FaCode />
              <FaReact />
              <RiNextjsFill />
              <FaHtml5 />
              <FaCss3 />
              <FaSass />
              <RiTailwindCssLine />
              <SiStyledcomponents />
              <FaJs />
              <SiTypescript />
              <FaNodeJs />
              <FaNpm />
              <FaYarn />
              <FaGit />
              <FaTerminal />
              <FaBootstrap />
              <FaWordpress />
              <FaElementor />
            </li>
          </ol>
        </div>
        <li className="tools">
          <h5>Design</h5>
          <FaFigma />
          <DiPhotoshop />
          <DiIllustrator />
          <SiCanva />
        </li>
        <li className="tools">
          <h5>Workspace & Others</h5>
          <SiMiro />
          <SiClickup />
          <FaGithub />
          <FaTrello />
          <SiAsana />
          <FaWindows />
          <FaApple />
        </li>
      </div>
    </div>
  );
}

export default Technologies;
