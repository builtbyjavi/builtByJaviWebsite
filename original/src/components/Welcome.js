import React from "react";
import "./Welcome.css";

function Welcome({ alt }) {
  return (
    <>
      <div className="home-container">
        <div className="home-img-wrapper">
          <img src="/images/portrait.webp" alt={alt} className="home-img"></img>
        </div>

        <div className="home-text-wrapper">
          <h1 className="home-header-1">BUILT</h1>
          <h1 className="home-header-2">by</h1>
          <h1 className="home-header-3">JAVI</h1>
        </div>
      </div>
    </>
  );
}

export default Welcome;
