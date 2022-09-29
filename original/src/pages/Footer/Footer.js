import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { GiHand } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-text">
        <h2>Let's Connect</h2>
        <h3>
          Follow my socials to stay up to date with my work!{" "}
          <span>
            <GiHand className="footer-text-icon" />
          </span>
        </h3>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://resume-16375.web.app/"
              target="_blank"
              aria-label="Resume"
              rel="noopener noreferrer"
            >
              <IoDocumentText />
            </a>
            <a
              className="social-icon-link"
              href="https://www.github.com/builtbyjavi"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="social-icon-link"
              href="https://www.linkedin.com/in/javier-cardenas/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            {/* <a
              className="social-icon-link"
              href="https://dribbble.com/builtByJavi"
              target="_blank"
              aria-label="Dribble"
              rel="noopener noreferrer"
            >
              <FaDribbble />
            </a> */}
          </div>
        </div>
      </section>
      <section className="footer-text">
        <p className="copyright">Copyright &copy; 2021 builtByJavi LLC.</p>
      </section>
    </div>
  );
}

export default Footer;
