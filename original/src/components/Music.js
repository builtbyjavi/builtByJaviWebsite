import React from "react";
import "./Music.css";
import { RiArrowDownLine } from "react-icons/ri";

function Music({ webImg }) {
  return (
    <div className="interests-container">
      <div className="interests-content-wrapper">
        <div className="left-music-wrapper">
          <div className="header-text-wrapper">
            <h1 className="interests-header">Music</h1>
            <h2 className="interests-subHeader">I like to make noise.</h2>
          </div>

          <iframe
            className="spotify"
            style={{ borderRadius: "10px" }}
            src="https://open.spotify.com/embed/artist/1UHOKeroZ6uopPhQDeosV8?utm_source=generator"
            title="spotify player"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>

        <div className="right-music-wrapper">
          <iframe
            style={{ borderRadius: "10px" }}
            src="https://www.youtube.com/embed/xeFRgRwkydo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="youtube"
            allowfullscreen
          ></iframe>

          <div className="music-text-wrapper">
            <h3 className="interests-description">
              view my artist website &nbsp;
            </h3>
            <div className="arrows-container">
              <RiArrowDownLine className="arrow-1"></RiArrowDownLine>
              <RiArrowDownLine className="arrow-2"></RiArrowDownLine>
              <RiArrowDownLine className="arrow-3"></RiArrowDownLine>
            </div>
          </div>
          <div className="website-wrapper">
            <a
              href="https://www.javimusiq.com"
              target="_blank"
              className="music-desc-link"
              rel="noopener noreferrer"
            >
              <img
                style={{ borderRadius: "10px" }}
                src={webImg}
                className="website-img"
                alt="javiMusiq Website Screenshot"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
