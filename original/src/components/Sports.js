import React from "react";
import "./Sports.css";

function Sports({ vid1, vid2, vid3 }) {
  return (
    <div className="interests-container">
      <div className="interests-content-wrapper reverse">
        <div className="left-sports-wrapper">
          <div className="sports-text-wrapper">
            <h1 className="interests-header">Sports</h1>
            <h2 className="interests-subHeader">I like to be active.</h2>
          </div>
          <img src={vid3} className="highlight-3" alt="group soccer team" />
        </div>
        <div className="right-sports-wrapper">
          <video
            src={vid1}
            autoPlay
            muted
            loop
            playsinline
            className="highlight-1"
            alt="soccer highlights"
          />
          <img src={vid2} className="highlight-2" alt="group soccer team" />
        </div>
      </div>
    </div>
  );
}

export default Sports;
