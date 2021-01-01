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


const FrontEndSkills = () => {

    return (
        <Wrapper>
            <SkillName>Front-end</SkillName>
            <Grid>
                <Item>
                    <SkillLogo src='../img/index/skillHTML5.png'/>
                    HTML5
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillCss3.png'/>
                    CSS3
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillJavascript.png'/>
                    Javascript
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillJQuery.png'/>
                    jQuery
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillReact.png'/>
                    React
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillWebpack.png'/>
                    Webpack
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillBabel.png'/>
                    Babel
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillStyledComponents.png'/>
                    Styled Components
                </Item>
                <Item>
                    <SkillLogo src='../img/index/skillRedux.png'/>
                    Redux
                </Item>
            </Grid>
        </Wrapper>
    )
}

export default FrontEndSkills;