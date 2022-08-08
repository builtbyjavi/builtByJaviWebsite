import React from "react";
import "./Sports.css";

function Sports({ vid1, vid2, vid3 }) {
  return (
    <div className="interests-container">
<<<<<<< HEAD
      <div className="interests-content-wrapper">
        <div className="left-sports-wrapper">
          <video
            src={vid1}
            autoPlay
            muted
            loop
            className="highlight-1"
            alt="soccer highlights"
          />
          <img src={vid2} className="highlight-2" alt="group soccer team" />
=======
      <div className="sports-wrapper">
        <div className="left-sports-wrapper">
          <img src={vid2} className="highlight-2" alt="group soccer team" />
          <img src={vid3} className="highlight-3" alt="group soccer team" />
>>>>>>> 8d3a45f4698f5fe173105aaadf6870406dc882c0
        </div>
        <div className="right-sports-wrapper">
          <div className="sports-text-wrapper">
            <h1 className="interests-header">Sports</h1>
            <h2 className="interests-subHeader">I like to be active.</h2>
          </div>
<<<<<<< HEAD
          <img src={vid3} className="highlight-3" alt="group soccer team" />
=======
          <video
            src={vid1}
            autoPlay
            muted
            playsInline
            loop
            controls
            className="highlight-1"
            alt="soccer highlights"
          />
>>>>>>> 8d3a45f4698f5fe173105aaadf6870406dc882c0
        </div>
      </div>
    </div>
  );
}

export default Sports;
