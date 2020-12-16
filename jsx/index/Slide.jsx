import React from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';

const Image = styledComponents.img`
    min-width: 100%;
    height: 300px;
`;

const Slide = ({ img }) => {
    return (
        <Image src={img}/>
    )
}

export default Slide;