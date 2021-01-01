import React from 'react';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
    width: 100%;
    border-top: 1px solid black;
    position: relative;
`;

const SkillName = styledComponents.h5`
    font-family: "Noto Sans KR", sans-serif;
    font-size: 0.8rem;
    letter-spacing: 3px;
    position: absolute;
    width: 100px;
    background-color: #fff;
    top: -10px;
    font-weight: 700;
    color: rgb(73, 73, 73);
`;

const Grid = styledComponents.div`
    display: grid;
    padding: 50px 0px;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 120px);
`;

const Item = styledComponents.div`
    width: 80px;
    margin: 0 auto;
    text-align: center;
`

const SkillLogo = styledComponents.img`
    width: 80px;
    height: 80px;
    display: inline-block;
    overflow: hidden;
`

const BackEndSkills = () => {

    return (
        <Wrapper>
            <SkillName>Back-end</SkillName>
            <Grid>
                <Item>
                    <SkillLogo src='../img/index/skillNodejs.png'/>
                    Node.js
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillExpress.png'/>
                    Express
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillAxios.png'/>
                    Axios
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillEjs.png'/>
                    EJS
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillMulter.png'/>
                    Multer
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillPuppeteer.png'/>
                    Puppeteer
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillSocketIo.png'/>
                    Socket.io
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillMysql.png'/>
                    MySQL
                </Item>
            </Grid>
        </Wrapper>
    )
}

export default BackEndSkills;