import React from "react";
import ProjectItem from "../components/ProjectItem";
import Technologies from "../components/Technologies";
import { useTheme } from "../components/ThemeProvider";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  const { theme } = useTheme();
  return (
    <div
      className={`h-screen ${
        theme === "dark" ? "dark" : "light"
      } flex justify-center items-center`}
    >
      <div className="projects">
        <div className="about">
          <h2> Hi there, I'm Nadine</h2>
          <div className="prompt">
            <p>
              <span
                style={{ fontFamily: "VT323, monospace", fontSize: "38px" }}
              >
                Pixel Perfectionist
              </span>{" "}
              & <em>Your Go-To UI/UX Alchemist</em>: Crafting User Experiences
              with a Decade of Design, Debugging, and Iced Coffee shaking.
            </p>
          </div>
        </div>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem
                id={idx}
                name={project.name}
                image={project.image}
                skills={project.skills}
                link={project.link}
              />
            );
          })}
        </div>
        <Technologies />
      </div>
    </div>
  );
}

export default Projects;
