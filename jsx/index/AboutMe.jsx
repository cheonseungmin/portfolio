import React from 'react';
import styledComponents from 'styled-components';

import Who from './Who.jsx';
import Skills from './Skills.jsx';

const Name = styledComponents.h1`
    font-family: "Passion One", cursive;
    font-style: italic;
    font-size: 2rem;
    color: rgb(223, 36, 230);
`

const AboutMe = () => {

    return (
        <div>
            <Name>Who.</Name>
            <Who />
            <Name>Skills.</Name>
            <Skills />
        </div>
    )
}

export default AboutMe;