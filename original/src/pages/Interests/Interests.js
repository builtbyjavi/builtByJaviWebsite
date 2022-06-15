import React from "react";
import Music from "../../components/Music";
import Sports from "../../components/Sports";
import VideoGrid from "../../components/VideoGrid";
import Photography from "../../components/Photography";
import { musicObj, sportsObj, photoObj, gridObj } from "./Data";
import { HashLink as Link } from "react-router-hash-link";
import { RiArrowDownLine } from "react-icons/ri";
import "./Interests.css";

function Interests() {
  return (
    <>
      <section>
        <div className="interests-header-container">
          <div className="interests-text-wrapper">
            <div className="other-works-wrapper">
              <h1 className="other">other</h1>
              <h1 className="interests-works">works</h1>
            </div>
          </div>
          <div className="arrow-wrapper">
            <Link to="#next" className="scroll-arrow">
              <RiArrowDownLine></RiArrowDownLine>
            </Link>
          </div>
        </div>
      </section>
      <div id="next">
        <Music {...musicObj} />
        <VideoGrid {...gridObj} />
        <Sports {...sportsObj} />
        <Photography {...photoObj} />
      </div>
      <div className="extra-space"></div>
    </>
  );
}

export default Interests;
