import React from 'react';
import styledComponents from 'styled-components';

import ContactImg from './ContactImg.jsx';
import ContactMail from './ContactMail.jsx';

const Wrapper = styledComponents.div`
    width: 100%;
    padding: 50px 20px;
    flex: 1px;
    margin: 0 auto;
    box-sizing: border-box;
`

const Container = styledComponents.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap-reverse;
    box-sizing: border-box;
`

const Contact = () => {

    return (
        <Wrapper>
            <Container>
                <ContactImg />
                <ContactMail />
            </Container>
        </Wrapper>
    )
}

export default Contact;