import React from 'react';
import Music from '../../Music';
import Sports from  '../../Sports';
import VideoGrid from '../../VideoGrid';
import Photography from '../../Photography';
import {musicObj, sportsObj, photoObj, gridObj} from './Data';
import './Interests.css';


function Interests() {
    return (
        <>  
            <section>
                <div className="interests-header-container">
                    <div className="interests-header-wrapper">
                        <div className="interests-text-wrapper">
                            <div className="other-works-wrapper">
                                <h1 className="other">
                                    other
                                </h1>
                                <h1 className="works">
                                    works
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Music {...musicObj} />
            <Sports {...sportsObj} />
            <VideoGrid {...gridObj}/>
            <Photography {...photoObj} />
        </>
    );
}

export default Interests;