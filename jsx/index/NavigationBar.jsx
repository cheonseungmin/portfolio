import React, { useContext } from 'react';

import { AppContext } from './AppContext.jsx';

import styledComponents from 'styled-components';

const Navigation = styledComponents.nav`
    width: 50%;
    margin: auto;
    border-bottom: 1px solid gray;
`

const Unlist = styledComponents.ul`
    text-align: center;
    display: flex;
`

const List = styledComponents.li`
    display: inline-block;
    list-style-type: none;
    margin: auto;
`

const Anchor = styledComponents.a`
    font: small-caps bold 2rem sans-serif;
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