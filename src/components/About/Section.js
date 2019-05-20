import React, { Children } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    border-bottom: 2px solid white;
    color: white;
    padding: 2rem 0;
    text-align: center;
    width: 100%;
    h2 {
        font-family: ${props => props.theme.fonts.header};
        font-size: 3em;
        padding: 0;
        margin: 0 auto 2rem auto;
    }
    p {
        margin: 2rem auto;
        padding: 0;
    }
`

export default Section