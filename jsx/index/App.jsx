import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';

import Header from './Header.jsx';
import Contents from './Contents.jsx';

import { AppContext } from './AppContext.jsx';

const Wrapper = styledComponents.div`
    background-image: url('../img/index/body.png');
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