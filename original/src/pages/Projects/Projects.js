import React from 'react';
import './Projects.css';
import {useLocation} from 'react-router-dom';


function Projects(props) { 

    
    const location = useLocation();
    // console.log(location.state);
    
    return (
        <>
            <div className='project-container'>
                <h1 className="project-header">project show page coming soon!</h1>
                <a href={location.state.projectLink} target='_blank' rel="noopener noreferrer" className="project-link-text">here's a link for now :)</a>
            </div>        
            
        </>
    )
}

export default Projects;