import React, { useContext } from 'react';
import styledComponents from 'styled-components';

import { AppContext } from './AppContext.jsx';
import AboutMe from './AboutMe.jsx';

const Container = styledComponents.div`
    position: relative;
    width: 100%;
    margin: auto;
`;

const Contents = () => {

    const { contentType } = useContext(AppContext);

    switch (contentType) {
        case 'About Me':
            return (
                <Container>
                    <AboutMe />
                </Container>
            )
    }
}

export default Contents;