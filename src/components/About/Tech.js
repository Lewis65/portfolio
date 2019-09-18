import React from 'react'
import styled from 'styled-components'

import Section from '../About/Section'

const IconGroup = styled.div`
    display: inline-flex;
    flex-basis: 0;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: -1rem;
    @media screen and (min-width: 1024px){
        margin: -2rem;
    }
`

const Icon = styled.div`
    align-items: center;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    justify-content: baseline;
    margin: 1rem;
    @media screen and (min-width: 1024px){
        margin: 2rem;
    }
    i {
        color: white;
        font-size: 2em;
        @media screen and (min-width: 1024px){
            font-size: 3em;
        }
    }
    span {
        display: none;
        font-size: 1rem;
        margin-top: 1rem;
        max-width: 5em;
        @media screen and (min-width: 1024px){
            display: block;
        }
    }
`

const Tech = () => (
    <Section>
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