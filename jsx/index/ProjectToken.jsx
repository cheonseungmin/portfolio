import React from 'react';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
    border: 1px solid #c7c7c7;
    border-radius: 10px;
    width: 100%;
    overflow: hidden;
    transition: all 0.3s ease;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        transform: translate(0px, -10px);
        box-shadow: 0px 10px 30px 0px rgba(53, 53, 53, 0.158);
      }
`

const ProjectImage = styledComponents.img`
    width: 100%;
    height: 180px;
    border-bottom: 1px solid #c7c7c7;
    background-image: url(${ props => props.imgSrc });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const ProjectText = styledComponents.div`
    font-family: "Noto Sans KR", sans-serif;
    padding: 30px 30px;
    box-sizing: border-box;

    h3 {
        color: rgb(70, 70, 70);
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 20px;
    }

    span {
        color: rgb(155, 155, 155);
        font-size: 0.8rem;
    }
`

const ProjectToken = ({ url, name, text }) => {

    return (
        <Wrapper>
            <ProjectImage imgSrc={ url } />
            <ProjectText>
                <h3>{ name }</h3>
                <span>{ text }</span>
            </ProjectText>
        </Wrapper>
    )
}

export default ProjectToken;