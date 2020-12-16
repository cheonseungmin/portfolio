import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';

const Circles =  styledComponents.div`
    text-align: center;
`

const Circle = styledComponents.img`
    min-width: 2%;
    margin: 1%;
    transition: all 0.3s ease-in-out;
    &:hover {
            filter: brightness(80%);
        }
    filter: brightness(${props => 
        props.currentSlide === props.id ?
            '80%);':
            '40%);'
        }
`

const SlideCircles = ({ currentSlide, setCurrentSlide, totalSlides }) => {
    const circleList = [];

    const jumpSlide = (target) => {
        setCurrentSlide(Number(target.id));
    }

    for(let i = 0; i < totalSlides; i++) {
        circleList.push(
            <Circle  
                onClick={(event) => jumpSlide(event.target)} 
                id={i} 
                key={i}
                src='../img/index/slideCircle.png'
                currentSlide={currentSlide}
            />
        );
    } 

    return (
        <Circles>
            {circleList.map(circle => circle)}
        </Circles>
    )
}

export default SlideCircles;