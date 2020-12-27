import React, { useState, useEffect } from 'react';
import styledComponents, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const Wrapper = styledComponents.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: ${ props => props.visible? '1;': '0;' }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props =>
        props.disappear &&
        css`
          animation-name: ${fadeOut};
        `}
`

const ModalWrapper = styledComponents.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
`

const ModalBody = styledComponents.div`
    position: relative;
    width: calc(100vw - 40px);
    max-width: 1620px;
    min-height: 188px;
    z-index: 9;
    padding: 60px 30px 30px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 30px 0 rgba(46, 46, 46, 0.26);
    border: 1px solid #ccc;
`

const ModalContent = styledComponents.div`
    overflow-y: auto;
    height: 560px;
    max-height: 920px;

    button {
        position: absolute;
        right: 35px;
        top: 20px;
        border: none;
        background-color: #fff;
        font-size: 25px;
        color: rgb(73, 73, 73);
        cursor: pointer;

        &:hover {
            color: #e00a87;
        }
    }
`

const ModalWebLink = styledComponents.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #e6e6e650;
    padding: 80px 15px 40px 15px;
    box-sizing: border-box;
    font-size: 65%;
    line-height: 1.5;

    p {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 17px;
        color: rgb(54, 54, 54);
    }

    a {
        font-family: "Noto Sans KR", sans-serif;
        text-decoration: none;
        border: 1px solid #000;
        color: rgb(41, 41, 41);
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 15px;
        margin-top: 20px;
        margin-bottom: 20px;

        &:hover {
            background-color: #e00a87;
            border-color: #e00a87;
            color: #fff;
        }
    }
`

const ModalOverlay = styledComponents.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(70, 70, 70, 0.8);
`

const ModalContainer = ({ visible, setVisible }) => {

    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);
  
    useEffect(() => {
      if (localVisible && !visible) {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 250);
      }
      setLocalVisible(visible);
    }, [localVisible, visible]);
  
    if (!animate && !localVisible) return null;
    return (
        <Wrapper disappear={!visible}>
            <ModalWrapper>
                <ModalBody>
                    <ModalContent>
                        <button onClick={() => setVisible(false)}>X</button>
                        <ModalWebLink>
                            <p>
                                문도 피구게임을 즐겨보세요!
                            </p>
                            <a href='https://github.com/cheonseungmin/mundododgeball'>
                               문도 피구 체험하기
                            </a>
                            <p>
                                깃허브에 코드를 정리했습니다.
                            </p>
                            <a href='https://github.com/cheonseungmin/mundododgeball'>
                               깃허브 바로가기
                            </a>
                        </ModalWebLink>
                    </ModalContent>
                </ModalBody>
                <ModalOverlay />
            </ModalWrapper>
        </Wrapper>
    )
}

export default ModalContainer;