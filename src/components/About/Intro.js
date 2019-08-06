import React from 'react'

import Heading from '../shared/Heading'
import Button from '../shared/ButtonLink'
import Section from '../About/Section'

const Intro = () => (
    <Section className='about-section'>
        <Heading hero>Hi. I'm Lewis.</Heading>
        <p>I'm a Javascript developer focused on creating web stuff that serves the needs of others and the things I find fascinating.</p>
        <Button to='#'>Resume</Button>
    </Section>
)

export default Intro