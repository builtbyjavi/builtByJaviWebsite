import React from 'react';
import Work from '../../Work';
import WorkReverse from '../../WorkReverse';
import {homeObjOne, recentWorkOne, recentWorkTwo, recentWorkThree} from './Data';
import './Portfolio.css';

function Portfolio() {
    return (  
        <>
            <section>
                <div className="portfolio-header-container">
                    <div className="portfolio-text-wrapper">
                        <div className="portfolio-header-wrapper">
                            <h1 className="pro">
                                pro
                            </h1>
                            <h1 className="p-works">
                                works
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio-work-container">
                <Work {...recentWorkOne} />
                <Work {...recentWorkTwo} />
                <Work {...recentWorkThree} />
            </section>
            
        </>
    );
}

export default Portfolio;