import React, { useContext } from 'react';

import { AppContext } from './AppContext.jsx';

const Contents = () => {

    const { contentType } = useContext(AppContext);

    return (
        <div>
            { contentType }
        </div>
    )
}

export default Contents;