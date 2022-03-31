import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css";

function Contact() {
    return (
        <div className="contact-container">

            <div className="contact-vid-wrapper">
                <video 
                    src="/videos/paperAirplane.mp4" 
                    autoPlay muted 
                    className="contact-vid"
                >
                </video>
            </div>
            <div className="contact-wrapper">
                <h1 className="contact-text">
                    Contact <a href="mailto:builtbyjavi@gmail.com" className="email">hi@builtbyjavi.com</a> 
                </h1>
                <h1 className="contact-text">
                    for <strong className="strong"> opportunities
                        </strong> to
                </h1>
                <h1 className="collaborate">
                    COLLABORATE
                </h1>
            </div>
            
        </div>
    )
}

export default Contact
