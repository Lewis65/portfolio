import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import Heading from '../shared/Heading'
import Section from '../About/Section'
import { IconButton, IconButtonExt } from './IntroButton'

const ButtonGroup = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: auto;
    & > a {
        margin: 0 0 1rem 0;
        :last-child {
            margin: 0;
        }
    }
    @media screen and (min-width: 1024px){
        flex-direction: row;
        & > a {
            margin: 0 1rem 0 0;
        }
    }
`

const IntroLink = styled(Link)`
    border-bottom: 1px solid ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.pink};
    text-decoration: none;
`

const Intro = () => (
    <Section className='about-section'>
        <Heading hero>Hi. I'm Lewis.</Heading>
        <p>I'm a Javascript developer in Calgary, AB. I write apps and websites with React, SASS/styled-components, Node.js, Express,  and more.</p>
        <p>Here you can see selected <IntroLink to='/projects'>projects</IntroLink> I've completed, as well as my <IntroLink to ='/blog'>blog</IntroLink>. You can also <IntroLink to='/contact'>contact me</IntroLink> or view <IntroLink to='#'>my resume</IntroLink>.</p>
        <ButtonGroup>
            <IconButton to='#' label='Resume' icon='far fa-file-alt'/>
            <IconButtonExt href='https://github.com/Lewis65' label='Github' icon='fab fa-github'/>
            <IconButtonExt href='https://www.linkedin.com/in/lewishorwood/' label='Linkedin' icon='fab fa-linkedin'/>
        </ButtonGroup>
    </Section>
)

export default Intro