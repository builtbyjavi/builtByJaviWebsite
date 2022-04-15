import React from "react";
import Work from "../../components/Work";
import { javiMusiq, cesarPacheco, jMWise, yelpCamp } from "./Data";
import { RiArrowDownLine } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <section>
        <div className="portfolio-header-container">
          <div className="portfolio-text-wrapper">
            <h3 className="pro">Pro</h3>
            <h3 className="p-works">Works</h3>
            <div className="arrow-wrapper">
              <Link to="#next" className="scroll-arrow">
                <RiArrowDownLine></RiArrowDownLine>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-work-container" id="next">
        <Work {...javiMusiq} />
        <Work {...yelpCamp} />
        <Work {...jMWise} />
        <Work {...cesarPacheco} />
      </section>
    </>
  );
}

export default Portfolio;
