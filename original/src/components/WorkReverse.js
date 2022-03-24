import React from 'react';
import {Link} from 'react-router-dom';
import './WorkReverse.css';

function Work({
    headLine, order, img, alt, workPage
}) {
    return (
        <>
            <div className="work-container">
                    
                    <div className="work-text-wrapper-reverse">
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
                        
                    </div>
                            
                    <div className="work-img-wrapper-reverse">
                        <Link to={workPage}>
                            <img src={img} alt={alt} className="work-img-reverse">
                            </img>
                        </Link>
                    </div>   
    
                </div>
        </>
    )
}

export default Work;
