import React from 'react';
import Welcome from '../../components/Welcome';
import Work from '../../components/Work';
import {homeObjOne} from './Data';
import {jMWise, yelpCamp} from '../Portfolio/Data';
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
            <div className="selected-works-container" id="next">
                <div className="selected-works-wrapper">
                    <h3 className="selected">
                        Selected
                    </h3>
                    <h3 className="works">
                        Works
                    </h3>
                    <div className="arrow-wrapper">
                        <Link to="#next2" className="scroll-arrow">
                            <RiArrowDownLine></RiArrowDownLine>
                        </Link>     
                    </div>
                </div>
            </div>
            <div id="next2">
                <Work {...yelpCamp} />
                <Work {...jMWise} />
            </div>
            <div className='btn-wrapper'>
                <Link to='./Portfolio'>
                <button className='btn'>
                    View All Projects
                </button>
                </Link>
                
            </div>
        </>
    );
}

export default Home;
