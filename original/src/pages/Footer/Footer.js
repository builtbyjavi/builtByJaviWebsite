import React from 'react';
import './Footer.css';
import {
  FaYoutube,
  FaLinkedin,
  FaBehance,
  FaDribbble
} from 'react-icons/fa';
import { GiHand } from 'react-icons/gi';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-text'>
        <h2>
          Let's Connect
        </h2>
        <h3>
          Follow my socials to stay up to date with my work!
          <GiHand className='footer-text-icon'/>
        </h3>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.youtube.com/channel/UC8ctY8xrQV-TZiiorJh1KKA'
              target='_blank'
              aria-label='Youtube'
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              className='social-icon-link'
              href='https://www.behance.net/builtbyjavi'
              target='_blank'
              aria-label='Behance'
              rel="noopener noreferrer"
            >
              <FaBehance />
            </a>
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/javier-cardenas/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className='social-icon-link'
              href='https://dribbble.com/builtByJavi'
              target='_blank'
              aria-label='Dribble'
              rel="noopener noreferrer"
            >
              <FaDribbble />
            </a>
          </div>
        </div>
      </section>
      <section className='footer-text'>
        <p className="copyright">
          Copyright &copy; 2021 builtByJavi LLC.
        </p>
      </section>
    </div>
  );
}

export default Footer;