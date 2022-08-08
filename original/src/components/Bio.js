import React from "react";
import "./Bio.css";

function Bio({ img1, img2, img3, alt1, alt2, alt3 }) {
  return (
    <>
      <div className="bio-page">
        <div className="header-container">
          <div className="bio-text-wrapper">
            <h1 className="hello">Hello,</h1>
            <h1 className="header-text-1">I'm Javier C&aacute;rdenas,</h1>
            <h1 className="header-text-2">but you can call me javi.</h1>
          </div>
          <div className="bio-img-wrapper">
            <img src={img1} alt={alt1} className="bio-img"></img>
          </div>
        </div>

        <div className="bio-wrapper">
          <div className="bio-container">
            <div class="about-div">
              <h2 id="about-text">About</h2>
            </div>
            <div className="about-row ">
              <div className="bio-img-wrapper-2">
                <img src={img3} alt={alt3} className="bio-img-2"></img>
              </div>
              <div className="bio-p-2">
                <p className="med-text">
                  I received a B.A. in Data Science with an emphasis in
                  Cognition from the University of California, Berkeley in 2020.
                  I have expanded upon my strengths in data analysis and
                  modeling to produce high quality consumer-facing web
                  applications. I am adept in the complete project lifecycle,
                  with 2+ years experience in full stack web development. Hit me
                  up if you would like to collaborate, I am always open to
                  making new friends.
                </p>
              </div>
            </div>
            <div className="about-row-reverse extra-space-bottom">
              <div className="bio-img-wrapper-1">
                <img src={img2} alt={alt2} className="bio-img-1"></img>
              </div>
              <div className="bio-p-1">
                <h3 className="sm-text">
                  Born and raised in Salinas, CA with roots in Chavinda,
                  Michoacan, Mexico. My love for creating has led me to my
                  current multimedia endeavors. Whether it is programming,
                  design, music production, or art, I am fixated on bringing
                  ideas to life to be enjoyed by a global audience. In this
                  process, I have become fascinated with creating truly
                  memorable and intuitive user experiences. Innovations in
                  design and technology continue to improve our digital
                  footprint, and I look forward to contributing positively to
                  the way we interface with these digital assets.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
