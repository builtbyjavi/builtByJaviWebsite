import React from "react";
import "./Projects.css";
import { useLocation } from "react-router-dom";

function Projects(props) {
  const location = useLocation();

  return (
    <>
      <div className="project-container">
        <h1 className="project-header">project show page coming soon!</h1>
        <h2 className="project-link-text">here's a link for now :)</h2>
        <a
          href={location.state.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="project-btn">View Project</button>
        </a>
      </div>
    </>
  );
}

export default Projects;
