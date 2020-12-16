import React from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';

const Image = styledComponents.img`
    position: absolute;
    top: 132.5px;
    width: 35px;
    height 35px;
    ${props => props.direction === 'previous'? 'left': 'right' }: 2%;
    transition: all 0.3s ease-in-out;
        &:hover {
            filter: brightness(150%);
        }
`

const SlideButton = ({direction, move, img }) => {
    return (
        <Image onClick={() => move()} direction={direction} src={img} />
    )
}

export default SlideButton;