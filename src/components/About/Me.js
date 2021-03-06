import React from 'react'
import styled from 'styled-components'

import Intro from '../About/Intro'

const Wrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: auto;
    max-width: 100%;
    position: relative;
    z-index: 3;
    &>.about-section:last-child{
        border-bottom: 0;
    }
    @media screen and (min-width: 1024px){
        font-size: 125%;
    }
`

const Me = () => (
    <Wrapper>
        <Intro/>
    </Wrapper>
)

export default Me