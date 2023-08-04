import React, { useState } from "react";
import "./projects.css";

import projectsData from "../../data/projectsData";

function ProjectCard({
  project,
  id,
  handleMouseOver,
  handleMouseLeave,
  activeId,
}) {
  const {
    title,
    description,
    image,
    technologies,
    repo,
    frontendRepo,
    backendRepo,
    demo,
  } = project;

  return (
    <div
      className={`project__card ${
        activeId && activeId != id ? "inactive" : ""
      }`}
      onMouseOver={() => handleMouseOver(id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project__title large__screen">{title}</div>

      <div className="project__info">
        <div className="project__description">
          <div className="project__title small__screen">{title}</div>
          <p>{description}</p>
        </div>
        <div className="project__preview">
          <img src={`/images/${image}`} alt="" />
        </div>
      </div>

      <div className="project__technology">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project__links">
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}

        {frontendRepo && (
          <a href={frontendRepo} target="_blank" rel="noopener noreferrer">
            Frontend Code
          </a>
        )}

        {backendRepo && (
          <a href={backendRepo} target="_blank" rel="noopener noreferrer">
            Backend Code
          </a>
        )}

        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const [activeId, setActiveId] = useState(null);

  const handleMouseOver = (id) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };

  return (
    <section id="projects">
      <h3 data-heading="Built with Passion">My Work</h3>

      <div className="projects__container">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            id={index + 1}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
            activeId={activeId}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
