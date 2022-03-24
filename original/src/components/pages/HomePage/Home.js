import React from 'react';
import Welcome from '../../Welcome';
import Work from '../../Work';
import {homeObjOne, recentWorkOne, recentWorkTwo, recentWorkThree} from './Data';
import './Home.css';
import { HashLink as Link } from 'react-router-hash-link'; 
import { RiArrowDownLine } from 'react-icons/ri';


function Home() {
    return (
        <>
            <Welcome {...homeObjOne} />
            <div className="arrow-wrapper">
                <Link to="#next" className="scroll-arrow">
                    <RiArrowDownLine></RiArrowDownLine>
                </Link>     
            </div>
            <section className="selected-works-container" id="next">
                <div className="selected-works-wrapper">
                    <h3 className="selected">
                        Selected
                    </h3>
                    <h3 className="works">
                        Works
                    </h3>
                </div>
            </section>
            <Work {...recentWorkOne} />
            <Work {...recentWorkTwo} />
            <Work {...recentWorkThree} />
        </>
    );
}

export default Home;
