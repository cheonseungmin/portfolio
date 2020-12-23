import React, { useContext } from 'react';
import styledComponents from 'styled-components';

import { AppContext } from './AppContext.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';

const Container = styledComponents.div`
    position: relative;
    width: 100%;
    margin: auto;
`;

const Contents = () => {

    const { contentType } = useContext(AppContext);

    let contents;

    if(contentType === 'About Me') {
        contents = <AboutMe />;
    } else if(contentType === 'Contact') {
        contents = <Contact />;
    }

    return (
        <Container>
            {contents}
        </Container>
    )
    
}

export default Contents;