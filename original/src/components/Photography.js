import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Photography.css';
import { RiArrowDownLine } from 'react-icons/ri';

function Photography({

    pimg1, pimg2, pimg3

}) {
    return (
        <div className="interests-container photography-container">
            <div className="photo-text-wrapper">
                <h1 className="interests-header">
                    Photography
                </h1>
                <h2 className="interests-subHeader">
                    I like to take pictures.
                </h2>
            </div>
            <div className="top-photo-wrapper">
                <img src='/images/photoPortrait.jpg' className="photo-portrait" alt="Man posing with camera"/>
            </div>
            <div className="description-wrapper">
                <h3 className="interests-description">
                    view the full gallery
                </h3>
                <div className="down-arrow-wrapper">
                    <RiArrowDownLine className="arrow-1"></RiArrowDownLine>
                    <RiArrowDownLine className="arrow-2"></RiArrowDownLine>
                    <RiArrowDownLine className="arrow-3"></RiArrowDownLine>
                </div>   
            </div>
            
            
            <div className="photo-grid-wrapper">
                
                <Grid container spacing={1} className="p-grid">
                    <Grid item xs={4} className='p-grid-item-wrapper'>
                        <Paper style={{borderRadius: "10px"}} square={false}  className="p-grid-item-paper">
                            <a href="https://flic.kr/ps/3YybVp" target="_blank" rel="noopener noreferrer"> 
                                <img src={pimg1} className="p-grid-img" alt="green field"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className='p-grid-item-wrapper'>
                        <Paper style={{borderRadius: "10px"}} square={false} className="p-grid-item-paper">
                            <a href="https://flic.kr/ps/3YybVp" target="_blank" rel="noopener noreferrer" alt="golden gate bridge at night"> 
                                <img src={pimg2} className="p-grid-img"/>
                            </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} className='p-grid-item-wrapper'>
                        <Paper style={{borderRadius: "10px"}} square={false} className="p-grid-item-paper">
                            <a href="https://flic.kr/ps/3YybVp" target="_blank" rel="noopener noreferrer" alt="half dome and el cap at Yosemite"> 
                                <img src={pimg3} className="p-grid-img"/>
                            </a>
                        </Paper>
                    </Grid>      
                </Grid>

            </div>
            
        </div>

            
    )
}

export default Photography;
