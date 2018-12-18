import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'
import Social from './Social'

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.eggshell};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 100vw;
  @media screen and (min-width: 1024px) {
    height: 100vh;
    left: 0;
    position: fixed;
    width: ${props => props.theme.headerWidth};
  }
`

const Header = () => (
  <HeaderWrapper>
    <h1>
      Lewis Horwood
    </h1>
    <Social/>
    <Button href="/contact">Contact me</Button>
  </HeaderWrapper>
)

export default Header
