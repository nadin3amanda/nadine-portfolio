import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";
import { useTheme } from "../components/ThemeProvider";

function Projects() {
  const { theme } = useTheme();
  return (
    <div
      className={`h-screen ${
        theme === "dark" ? "dark" : "light"
      } flex justify-center items-center`}
    >
      <div className="projects">
        <h1> My Personal Projects</h1>
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
      </div>
    </div>
  );
}

export default Projects;
