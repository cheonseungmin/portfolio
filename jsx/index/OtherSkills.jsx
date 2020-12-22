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
    grid-template-columns: repeat(auto-fit, minmax(100px, 100px));
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

const OtherSkills = () => {

    return (
        <Wrapper>
            <SkillName>Others</SkillName>
            <Grid>
                <Item>
                    <SkillLogo src='../img/index/skillGit.png'/>
                    Git Hub
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillExpress.png'/>
                    Slack
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillC.png'/>
                    C
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillJava.png'/>
                    Java
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillPython.png'/>
                    Python
                </Item>
            </Grid>
        </Wrapper>
    )
}

export default OtherSkills;