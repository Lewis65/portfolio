import React from 'react'
import styled from 'styled-components'

import Heading from '../shared/Heading'
import Button from '../shared/ButtonLink'

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    a {
        margin: 0 2rem;
    }
`

const Intro = () => (
    <div>
        <Heading hero>Hi. I'm Lewis.</Heading>
        <p>I'm a Javascript developer focused on creating web stuff that serves the needs of others and the things I find fascinating.</p>
        <ButtonGroup>
            <Button to='google.com'>Resume</Button>
            <Button to='google.com'>LinkedIn</Button>
            <Button to='google.com'>Contact</Button>
        </ButtonGroup>
    </div>
)

export default Intro