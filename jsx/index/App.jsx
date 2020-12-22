import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';

import Header from './Header.jsx';
import Contents from './Contents.jsx';

import { AppContext } from './AppContext.jsx';

const Wrapper = styledComponents.div`
    width: 100%;
    max-width: 1000px;
    flex: 1px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const App = () => {

    const [contentType, setContentType] = useState('About Me');

    return (
        <Wrapper>
            <AppContext.Provider value={ { contentType, setContentType } }>
                <Header />
                <Contents />
            </AppContext.Provider>
        </Wrapper>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);