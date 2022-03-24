import React from 'react';
import './VideoGrid.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function VideoGrid({
    
    img1, img2, img3, img4, img5

}) {

    return (
        <div className="interests-container">
            <div className="interests-content-wrapper">
                <div className="left-art-wrapper">
                    <div className="video-container">
                        <video src="/videos/logoLapse.mp4" autoPlay muted loop className="auto-video"></video>     
                    </div>
                    <div className="grid-container" >
                        <Grid container spacing={1} className="grid">
                            <Grid item xs={3} className='grid-item-wrapper grid-item-border1'>
                                <h3 className="drawing-text">portrait</h3>
                                <Paper square={true}  className="grid-item-paper">
                                    <img src={img1} className="grid-img"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} className='grid-item-wrapper grid-item-border2'>
                                <h3 className="drawing-text">portrait</h3>
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img2} className="grid-img"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={3} className='grid-item-wrapper grid-item-border3'>
                                <h3 className="drawing-text">portrait</h3>
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img3} className="grid-img"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} className='grid-item-wrapper grid-item-border4'>
                                <h3 className="drawing-text">portrait</h3>
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img4} className="grid-img"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} className='grid-item-wrapper grid-item-border5'>
                                <h3 className="drawing-text">portrait</h3>
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img5} className="grid-img"/>
                                </Paper>
                            </Grid>
                            
                        </Grid>
                    </div>
                </div>
                <div className="right-art-wrapper">
                    <div className="art-text-wrapper">
                        <h1 className="interests-header">
                            Illustration
                        </h1>
                        <h2 className="interests-subHeader">
                            I like to make art.
                        </h2>
                        {/* <h3 className="interests-description">
                            check out some bangin $ketches
                        </h3> */}
                    </div>
                </div>
                
            </div> 
        </div>
        
    )
}

export default VideoGrid;
