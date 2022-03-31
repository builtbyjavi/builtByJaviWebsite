import React from 'react';
import './Sports.css';

function Sports({

    vid1, vid2, vid3

}) {
    return (
        <div className="interests-container">
            <div className="interests-content-wrapper">
                <div className="left-sports-wrapper">
                    <img src={vid2} className="highlight-2"/>
                    <video src={vid1} autoPlay muted loop className="highlight-1"/>
                </div>
                <div className="right-sports-wrapper">
                    <div className="sports-text-wrapper">
                        <h1 className="interests-header">
                            Sports
                        </h1>
                        <h2 className="interests-subHeader">
                            I like to be active.
                        </h2>
                    </div>
                    <img src={vid3} className="highlight-3"/>
                    
                </div>
            </div>
            
            

        </div>
    )
}

export default Sports;