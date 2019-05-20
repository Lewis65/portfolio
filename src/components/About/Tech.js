import React from 'react'
import styled from 'styled-components'

import Section from '../About/Section'

const IconGroup = styled.div`
    display: flex;
    flex-basis: 0;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: -2rem;
`

const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    margin: 2rem 0;
    i {
        font-size: 5em;
    }
    span {
        margin-top: 0.5rem;
        max-width: 5em;
    }
`

const Tech = () => (
    <Section className='about-section'>
        <h2>Tech</h2>
        <p>I do most of my work with:</p>
        <IconGroup>
            <Icon>
                <i className='fab fa-js'/>
                <span>Javascript</span>
            </Icon>
            <Icon>
                <i className='fab fa-react'/>
                <span>React</span>
            </Icon>
            <Icon>
                <i className='fab fa-sass'/>
                <span>Sass</span>
            </Icon>
            <Icon>
                <i className='fab fa-css3-alt'/>
                <span>CSS3</span>
            </Icon>
            <Icon>
                <i className='fab fa-node-js'/>
                <span>Node.js & Express</span>
            </Icon>
            <Icon>
                <i className='fas fa-database'/>
                <span>MongoDB</span>
            </Icon>
        </IconGroup>
    </Section>
)

export default Tech