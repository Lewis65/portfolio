import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'
import Avatar from './Avatar'
import Nav from './Nav'
import Social from './Social'

const HeaderTitle = styled.h1`
  color: ${props => props.theme.colors.gunmetal};
  font-family: ${props => props.theme.fonts.header};
  font-size: 300%;
  margin: 1rem 0;
  padding: 0;
  text-align: center;
`

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
    <HeaderTitle>
      Lewis Horwood
    </HeaderTitle>
    <Avatar/>
    <Social/>
    <Button href="/contact">Contact me</Button>
    <Nav/>
  </HeaderWrapper>
)

export default Header
