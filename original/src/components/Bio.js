import React from 'react';
import './Bio.css';

function Bio({
    img1, img2, img3, alt1, alt2, alt3
}) {
    return (
        <>
            <div className="bio-page">
                <div className="header-container">

                    <div className="bio-text-wrapper">
                        <div className="bio-header-wrapper">
                            <h1 className="wassup">
                                WASSUP
                            </h1>
                            <h1 className="quiubo">
                                (QUIUBO)
                            </h1>
                        </div>
                        <h1 className="header-text">
                            I'm Javier C&aacute;rdenas,
                        </h1>
                        <h1 className="header-text">
                            but you can call me javi.
                        </h1>
                    </div>
                    <div className="bio-img-wrapper">
                        <img src={img1} alt={alt1} className="bio-img">
                        </img>
                    </div>
                

                </div>
                

                <div className="bio-container">
                    <div class="about-div">
                        <h2 id="about-text">About</h2>
                    </div>
                    <div className="about-row-reverse">
                        <div className="bio-img-wrapper-1">
                            <img src={img2} alt={alt2} className="bio-img-1">
                            </img>
                        </div>
                        <div className="bio-p-1">
                            <h3 className="med-text">
                                Born and raised in Salinas, CA with roots in Chavinda, Michoacan, Mexico.
                                I come from a working people, and have always been fascinated with using
                                my hands to create. In recent years this passion has shifted towards a 
                                digital medium. Whether it is programming, design, music production,
                                or digital art, I am fixated on bringing ideas to life to be enjoyed
                                by a global audience.
                            </h3>
                        </div>
                        
                    </div>

                    <div className="about-row extra-space-bottom">
                        <div className="bio-img-wrapper-2">
                            <img src={img3} alt={alt3} className="bio-img-2">
                            </img>  
                        </div>
                        <div className="bio-p-2">
                            <p className="sm-text">
                                I received a Bachelors of Arts degree in Data Science with an emphasis
                                in Cognition from the University of California, Berkeley in 2020. I 
                                have expanded upon the fundamentals of programming and statistics
                                earned through the nation's #1 program, and incorporated that knowledge 
                                with my love of digital media which has led me to my current trajectory 
                                as a Front-End Software Engineer. I specialize in end-to-end
                                product development, branding, and overthinking.
                                Hit me up if you would like to collaborate, I am always open to
                                making new friends.
                            </p>
                        </div>
                        
                    </div>

                </div>
                
                
            </div>
            

        </>
    )
}

export default Bio;
