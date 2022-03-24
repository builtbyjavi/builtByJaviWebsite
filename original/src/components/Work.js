import React from 'react';
import {Link} from 'react-router-dom';
import './Work.css';

function Work({
    headLine, order, img, alt, workPage, description
}) {
    return (
        <>
            <div className="work-container">
                <div className="work-wrapper">

                    <div className="work-text-wrapper">
                        <div className="fraction-wrapper">
                            <h3 className="fraction">
                                {order}
                            </h3>
                        </div>
                        <Link to={workPage} className="link-wrapper">
                            <h1 className="link-text">
                                {headLine}
                            </h1>
                        </Link>
                        <div className="desc-wrapper">
                            <p className="work-description">
                                {description}
                            </p>
                        </div>
                        
                    </div>
                            
                    <div className="work-img-wrapper">
                        <Link to={workPage}>
                            <img src={img} alt={alt} className="work-img">
                            </img>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Work;
