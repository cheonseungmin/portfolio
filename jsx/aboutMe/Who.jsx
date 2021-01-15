import React from 'react';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    flex-wrap: wrap;
    padding: 50px 0px;
`;

const MeImg = styledComponents.img`
    width: 220px;
    height: 270px;
    border-radius: 50%;
    margin: 5% auto;
`;

const MeText = styledComponents.div`
    margin-top: 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1rem;
    line-height: 25px;
`;

const Year = styledComponents.span`
    font-size: 0.8em;
    color: rgb(138, 138, 138);
`


const Who = () => {
    const year = new Date().getFullYear() - 1996 + 1;

    return (
        <Wrapper>
            <MeImg src='../img/index/me.png' />
            
            <MeText>
                <img src='../img/index/4.png' />
                <p>
                    <Year>1996.09.05 {year}세</Year><br />
                    안녕하세요 프론트엔드 개발자 천승민입니다.<br />
                    프론트엔드의 매력은 바로 사용자와의 직접적인 개발을 통해 소통할 수 있다는 점입니다. <br />
                    프로젝트에 대해 함께 이야기하여 개선하는 것을 좋아합니다.<br />
                    개발에 보람을 느끼며 이것은 저를 움직이게 하는 원동력이 됩니다.<br />
                </p>
            </MeText>
        </Wrapper>
    )
}

export default Who;