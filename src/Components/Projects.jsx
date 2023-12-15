import React from "react";
import "../styles/Main/Projects.scss";
import "../styles/Main/ProjectsDark.scss";
import "../styles/Main/Responsive/ProjectsResponsive.scss";
import ListProjects from "./ReusedComponents/ListProjects";
import { informations } from "../MetaData/InformationProjectsData";

const Projects = () => {
  return (
    <section className="projects-container">
      <div className="projects" id="projects">
        <h1>
          Projetos<span className="point">.</span>
        </h1>
        <ul className="projects-list">
          {informations.map((props, index) => (
            <ListProjects key={index} {...props} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
