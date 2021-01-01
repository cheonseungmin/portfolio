import React from 'react';
import styledComponents from 'styled-components';

import FrontEndSkills from './FrontEndSkills.jsx';
import BackEndSkills from './BackEndSkills.jsx';
import OtherSkills from './OtherSkills.jsx';

const Wrapper = styledComponents.div`
    width: 100%;
    padding-top: 20px;
`;

const Skills = () => {

    return (
        <Wrapper>
            <FrontEndSkills />
            <BackEndSkills />
            <OtherSkills />
        </Wrapper>
    )
}

export default Skills;