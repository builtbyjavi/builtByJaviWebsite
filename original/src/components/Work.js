import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";

function Work(props) {
  return (
    <>
      <div className="work-container">
        <div className="work-text-wrapper">
          <div className="fraction-wrapper">
            <h3 className="fraction">{props.order}</h3>
          </div>
          <h1 className="link-text">{props.headLine}</h1>
          <div className="desc-wrapper">
            <p className="work-description">{props.description}</p>
          </div>
          <div className="project-btn-wrapper">
            <a
              href={props.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn project-btn">View</button>
            </a>
          </div>
        </div>
        <div className="work-img-wrapper">
          <a href={props.projectLink} target="_blank" rel="noopener noreferrer">
            <img src={props.img} alt={props.alt} className="work-img"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Work;
