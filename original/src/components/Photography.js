import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './Photography.css';

function Photography({

    pimg1, pimg2, pimg3

}) {
    return (
        <div className="interests-container">
                <div className="photo-content-wrapper">
                    <div className="top-photo-wrapper">
                        <div className="left-photo-wrapper">
                            <div className="photo-text-wrapper">
                                <h1 className="interests-header">
                                    Photography
                                </h1>
                                <h2 className="interests-subHeader">
                                    I like to take pictures.
                                </h2>
                                
                            </div>
                        </div>
                        
                        <div className="right-photo-wrapper">
                            <img src='/images/photoPortrait.jpg' className="photo-portrait"/>
                        </div>
                    </div>
                    
                    <h3 className="gallery-description">
                        view the full gallery <a className="web-link" href="https://www.javimusiq.com" 
                                                target="_blank"> &nbsp; @javimusiq.com</a>
                    </h3> 
                    
                    <div className="bottom-photo-wrapper">
                        
                        <Grid container spacing={1} className="p-grid">
                            <Grid item xs={4} className='p-grid-item-wrapper'>
                                <Paper square={true}  className="p-grid-item-paper">
                                    <img src={pimg1} className="p-grid-img"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={4} className='p-grid-item-wrapper'>
                                <Paper square={true} className="p-grid-item-paper">
                                    <img src={pimg2} className="p-grid-img"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={4} className='p-grid-item-wrapper'>
                                <Paper square={true} className="p-grid-item-paper">
                                    <img src={pimg3} className="p-grid-img"/>
                                </Paper>
                            </Grid>      
                        </Grid>
                    </div>
                    
                </div>

        </div>
            
    )
}

export default Photography;
