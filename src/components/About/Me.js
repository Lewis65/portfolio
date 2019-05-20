import React from 'react'
import styled from 'styled-components'

import Heading from '../shared/Heading'
import Intro from '../About/Intro'
import Tech from '../About/Tech'

const Wrapper = styled.div`
    align-items: center;
    border: 2px solid gray;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: auto;
    position: relative;
    z-index: 3;
    &>div {
        border-bottom: 2px solid white;
        color: white;
        padding: 2rem 0;
    }
    &>div:last-child{
        border-bottom: 0;
    }
    h2 {
        font-family: ${props => props.theme.fonts.header};
        font-size: 3em;
        padding: 0 0 2rem 0;
        margin: 0;
    }
`

const Me = () => (
    <Wrapper>
        <Intro/>
        <Tech/>
    </Wrapper>
)

export default Me