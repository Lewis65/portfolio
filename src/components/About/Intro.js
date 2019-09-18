import React from 'react'

import Link from 'gatsby'
import Heading from '../shared/Heading'
import ButtonLink from '../shared/ButtonLink'
import Section from '../About/Section'

const Intro = () => (
    <Section className='about-section'>
        <Heading hero>Hi. I'm Lewis.</Heading>
        <p>I'm a Javascript developer in Calgary, AB. I write apps and websites with React, SASS/styled-components, Node.js, Express,  and more.</p>
        <p>Here you can see selected <Link to='/projects'>projects</Link> I've completed, as well as my <Link to ='/blog'>blog</Link>. You can also <Link to='/contact'>contact me</Link> or view <Link to='#'>my resume</Link>.</p>
        
    </Section>
)

export default Intro