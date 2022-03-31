import React from 'react';
import {bioObjOne} from './Data';
import Bio from '../../components/Bio';

function About() {
    return (
        <>
            <Bio {...bioObjOne} />
        </>
    );
}

export default About;