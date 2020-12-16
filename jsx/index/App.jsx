import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
// import NavigationBar from './NavigationBar';
// import Contents from './Contents';
// import Footer from './Footer';

const App = () => {

    return (
        <div>
            <Header />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);