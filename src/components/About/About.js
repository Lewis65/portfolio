import React from 'react'
import styled from 'styled-components'

import Hero from '../About/Hero'

const Main = styled.main`
  align-content: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  @media screen and (min-width: 1024px) {
    height: 100vh;
    padding: 5rem;
  }
`

const About = () => (
  <Main>
    
    <Hero/>
  </Main>
)

export default About