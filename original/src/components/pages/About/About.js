import React from 'react';
import {bioObjOne} from './Data';
import Bio from '../../Bio';

function About() {
    return (
        <>
            <Bio {...bioObjOne} />
        </>
    );
}

export default About;