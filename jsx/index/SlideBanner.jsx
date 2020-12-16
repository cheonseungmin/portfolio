import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styledComponents from 'styled-components';

import Slide from './Slide.jsx';
import SlideButton from './SlideButton.jsx';
import SlideCircles from './SlideCircles.jsx';

const Container = styledComponents.div`
    position: relative;
    width: 50%;
    margin: auto;
    overflow: hidden;
`;

const SlideContainer = styledComponents.div`
    width: 100%;
    display: flex;
`;

const SlideBanner = () => {

    const TOTAL_SLIDES = 3;

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideRef = useRef(null);

    const previousSlide = () => {
        if(currentSlide <= 0) setCurrentSlide(TOTAL_SLIDES - 1);
        else setCurrentSlide(currentSlide - 1);
    }

    const nextSlide = () => {
        if(TOTAL_SLIDES - 1 <= currentSlide) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
    }


    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);



    return (
        <Container>
            <SlideContainer ref={slideRef}>
                <Slide img='../img/index/1.png'/>
                <Slide img='../img/index/2.png'/>
                <Slide img='../img/index/3.png'/>
            </SlideContainer>
            <SlideButton move={previousSlide} direction={'previous'} img={'../img/index/previousButton.png'} />
            <SlideButton move={nextSlide} direction={'next'} img={'../img/index/nextButton.png'}/>
            <SlideCircles currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} totalSlides={TOTAL_SLIDES} />
        </Container>
    );
}

export default SlideBanner;