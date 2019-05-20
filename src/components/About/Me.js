import React from 'react'
import styled from 'styled-components'

import Intro from '../About/Intro'
import Tech from '../About/Tech'

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
`

const Me = () => (
    <Wrapper>
        <Intro/>
        <Tech/>
    </Wrapper>
)

export default Me