import React from 'react';
import Project from '../../components/Project';
import './Projects.css';
import {yelpCamp} from '../Portfolio/Data';


function Projects({
}) { 
    
    return (
        <>
            <Project {...yelpCamp}/>
        </>
    )
}

export default Projects;