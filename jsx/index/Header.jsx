import React from 'react';
import ReactDOM from 'react-dom';

import SlideBanner from './SlideBanner.jsx';
import NavigationBar from './NavigationBar.jsx';

const Header = () => {

    return (
        <header>
            <SlideBanner />
            <NavigationBar />
        </header>
    )
}

export default Header;