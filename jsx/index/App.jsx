import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Contents from './Contents.jsx';

import { AppContext } from './AppContext.jsx';

const App = () => {

    const [contentType, setContentType] = useState('About Me');

    return (
        <div>
            <AppContext.Provider value={ { contentType, setContentType } }>
                <Header />
                <Contents />
            </AppContext.Provider>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);