import React, { useContext } from 'react';

import { AppContext } from './AppContext.jsx';

import styledComponents from 'styled-components';

const Navigation = styledComponents.nav`
    width: 100%;
    margin: auto;
    border-bottom: 1px solid gray;
`

const Unlist = styledComponents.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    font-family: "Passion One", cursive;
    font-style: italic;
    box-sizing: border-box;
`

const List = styledComponents.li`
    display: inline-block;
    list-style-type: none;
    margin: auto;
`

const Anchor = styledComponents.a`
    font-size: 2.3rem;
    padding: 13px 0px;
    cursor: pointer;
    color: rgb(179, 179, 179);
    box-sizing: border-box;
    display: block;
    
    transition: all 0.3s ease-in-out;
    color: ${ props =>
        props.contentType === props.inner?
        'black':
        'gray' };
    &:link {
        text-decoration:none;
    }
    &:visited {
        text-decoration:none;
    }
    &:active {
        text-decoration:none;
    }
    &:hover {
        text-decoration:none;
    }
`

const NavigationBar = () => {

    const { contentType, setContentType } = useContext(AppContext);

    const changeContent = (target) => {
        setContentType(target.innerHTML);
    }

    return (
        <Navigation>
            <Unlist>
                <List>
                    <Anchor href='#' 
                    onClick={(event) => changeContent(event.target)}
                    contentType={contentType}
                    inner={'Project'}>
                        Project
                    </Anchor>
                </List>

                <List>
                    <Anchor href='#' 
                    onClick={(event) => changeContent(event.target)}
                    contentType={contentType}
                    inner={'About Me'}>
                        About Me
                        </Anchor>
                </List>

                <List>
                    <Anchor href='#' 
                    onClick={(event) => changeContent(event.target)}
                    contentType={contentType}
                    inner={'Contact'}>
                        Contact
                    </Anchor>
                </List>
            </Unlist>
        </Navigation>
    )
}

export default NavigationBar;