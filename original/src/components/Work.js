import React from 'react';
import {Link} from 'react-router-dom';
import './Work.css';

function Work(props) {
    return (
        <>  
            <div className="work-container">
                <div className="work-text-wrapper">
                    <div className="fraction-wrapper">
                        <h3 className="fraction">
                            {props.order}
                        </h3>
                    </div>
                    <Link to={props.workPage} className="link-wrapper" 
                        state={props}>
                        <h1 className="link-text">
                            {props.headLine}
                        </h1>
                    </Link>
                    <div className="desc-wrapper">
                        <p className="work-description">
                            {props.description}
                        </p>
                    </div>
                </div>  
                <div className="work-img-wrapper">
                    <Link to={props.workPage} className="img-link-wrapper" 
                        state={props}>
                        <img src={props.img} alt={props.alt} className="work-img">
                        </img>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Work;
