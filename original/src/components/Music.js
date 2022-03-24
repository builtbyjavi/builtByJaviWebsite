import React from 'react';
import './Music.css';
import { RiArrowRightLine } from 'react-icons/ri';

function Music({

    webImg

}) {
    return (
        <div className="interests-container">
            <div className="interests-content-wrapper">
                <div className="left-music-wrapper">
                    <iframe src="https://www.youtube.com/embed/xeFRgRwkydo" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="performance-1" allowfullscreen></iframe>
                    
                    <iframe src="https://www.youtube.com/embed/Wk7wZBjdlrc"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="performance-2" allowfullscreen></iframe>
                </div>

                <div className="right-music-wrapper">
                    <div className="music-text-wrapper">
                        <h1 className="interests-header">
                            Music
                        </h1>
                        <h2 className="interests-subHeader">
                            I like to make noise.
                        </h2>
                        <h3 className="interests-description">
                            view my artist website &nbsp;
                            <RiArrowRightLine className="arrow-1"></RiArrowRightLine>
                            <RiArrowRightLine className="arrow-2"></RiArrowRightLine>
                            <RiArrowRightLine className="arrow-3"></RiArrowRightLine>
                            &nbsp;
                            <a href="https://www.javimusiq.com" target="_blank" className="music-desc-link">
                                @javimusiq.com
                            </a>
                        </h3>
                    </div>
                    <div className="website-wrapper">
                        <img src={webImg} className="website-img"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Music;
