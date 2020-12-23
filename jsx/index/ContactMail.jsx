import React from 'react';
import styledComponents from 'styled-components';

import { FaEnvelopeSquare, FaGithub, FaBlogger } from 'react-icons/fa';

const Wrapper = styledComponents.div`
    border: 1px solid #ccc;
    width: 100%;
    max-width: 400px;
`

const Heading1 = styledComponents.div`
    font-family: "Passion One", cursive;
    font-style: italic;
    font-size: 2rem;
    color: rgb(255, 189, 46);
    padding: 15px;
    box-sizing: border-box;
`

const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    padding: 30px 40px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    align-items: center;
`

const Span1 = styledComponents.div`
    font-family: "Noto Sans KR", sans-serif;
    text-align: center;
    display: inline-block;
    width: 100%;
    padding: 20px 10px;
    color: #8a8a8a;
    box-sizing: border-box;
    font-size: 0.9rem;
    line-height: 20px;
`

const Anchor = styledComponents.a`
    text-decoration: none;
    color: rgb(71, 71, 71);
    font-family: "Passion One", cursive;
    font-style: italic;
    font-size: 1.5rem;
    word-break: break-all;
    margin: 20px 0px;
    text-align: center;
`

const ContactMail = () => {

    return (
        <Wrapper>
            <Heading1>Communication</Heading1>
            <Container>
                <FaEnvelopeSquare size='40' />
                <Anchor href='mailto:dudghsy@naver.com'>https://dudghsy@naver.com</Anchor>
                <FaBlogger size='40' />
                <Anchor href='https://dudghsx.tistory.com/'>https://dudghsx.tistory.com</Anchor>
                <FaGithub size='40' />
                <Anchor href='https://github.com/cheonseungmin'>https://github.com/cheonseungmin</Anchor>
            </Container>
            <Span1>
                메일을 보내주시면 <br />
                최대한 빠르게 답장 드리겠습니다 : )
            </Span1>
        </Wrapper>
    )
}

export default ContactMail;