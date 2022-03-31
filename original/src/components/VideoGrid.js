import React from 'react';
import './VideoGrid.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function VideoGrid({
    
    img1, img2, img3, img4, img5

}) {

    return (
        <div className="interests-container">
            <div className="art-content-wrapper">
                <div className="art-text-wrapper">
                    <h1 className="interests-header">
                        Illustration
                    </h1>
                    <h2 className="interests-subHeader">
                        I like to make art.
                    </h2>
                </div>
                
                <div className="video-grid-container">
                    <div className="video-container">
                        <video src="/videos/logoLapse.mp4" autoPlay muted loop className="auto-video"></video>   
                        <div className="grid-container" >
                        <Grid container spacing={1} className="grid">
                            <Grid item xs={3} className='grid-item-wrapper grid-item-border1'>
                                {/* <h3 className="drawing-text">portrait</h3> */}
                                <Paper square={true}  className="grid-item-paper">
                                    <img src={img1} className="grid-img" alt="illustrated portrait of Javi"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} className='grid-item-wrapper grid-item-border2'>
                                {/* <h3 className="drawing-text">portrait</h3> */}
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img2} className="grid-img" alt="illustrated artwork of tree and children"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={3} className='grid-item-wrapper grid-item-border3'>
                                {/* <h3 className="drawing-text">portrait</h3> */}
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img3} className="grid-img" alt="illustrated portrait of Javi"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} className='grid-item-wrapper grid-item-border4'>
                                {/* <h3 className="drawing-text">portrait</h3> */}
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img4} className="grid-img" alt="illustrated artwork of tree and children"/>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} className='grid-item-wrapper grid-item-border5'>
                                {/* <h3 className="drawing-text">portrait</h3> */}
                                <Paper square={true} className="grid-item-paper">
                                    <img src={img5} className="grid-img" alt="illustrated artwork of tree and children"/>
                                </Paper>
                            </Grid>
                            
                        </Grid>
                    </div>  
                    </div>
                    
                </div>
                
            </div>
            
        </div> 
        
    )
}

export default VideoGrid;
