import React from 'react';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
    width: 100%;
    max-width: 350px;
    margin: 35px;
`

const Image = styledComponents.img`
    width: 100%;
`

const ContactImg = () => {

    return (
        <Wrapper>
            <Image src='../img/contact/contact.png' />
        </Wrapper>
    )
}

export default ContactImg;