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
          <div className="tools-grid">
            <div className="tools-dev">
              <FaCode title="Code" />
              <FaReact title="React" />
              <RiNextjsFill title="Next.js" />
              <FaHtml5 title="HTML5" />
              <FaCss3 title="CSS3" />
              <FaSass title="Sass" />
              <RiTailwindCssLine title="Tailwind CSS" />
              <SiStyledcomponents title="Styled Components" />
              <FaJs title="JavaScript" />
              <SiTypescript title="TypeScript" />
              <FaNodeJs title="Node.js" />
              <FaNpm title="NPM" />
              <FaYarn title="Yarn" />
              <FaGit title="Git" />
              <FaTerminal title="Terminal" />
              <FaBootstrap title="Bootstrap" />
              <FaWordpress title="WordPress" />
              <FaElementor title="Elementor" />
            </div>
          </div>
        </div>
        <div className="tools-col">
          <h5>Design</h5>
          <div className="tools-grid">
            <div className="tools-design">
              <FaFigma title="Figma" />
              <DiPhotoshop title="Photoshop" />
              <DiIllustrator title="Illustrator" />
              <SiCanva title="Canva" />
            </div>
          </div>
        </div>
        <div className="tools-col">
          <h5>Workspace & Others</h5>
          <div className="tools-grid">
            <div className="tools-design">
              <SiMiro title="Miro" />
              <SiClickup title="ClickUp" />
              <FaGithub title="GitHub" />
              <FaTrello title="Trello" />
              <SiAsana title="Asana" />
              <FaWindows title="Windows" />
              <FaApple title="Apple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
