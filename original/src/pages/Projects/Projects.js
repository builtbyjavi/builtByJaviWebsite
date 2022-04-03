import React from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';


function Projects() { 

    const location = useLocation();
    
    return (
        <>
            <div className='project-container'>
                {/* {console.log(location.state)} */}
                <h1 className="project-link-text">project show page coming soon!</h1>
            </div>        
            
        </>
    )
}

export default Projects;