import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'
import Avatar from './Avatar'
import Nav from './Nav'
import Social from './Social'

const HeaderTitle = styled.h1`
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fonts.header};
  font-size: 300%;
  margin: 0;
  padding: 0;
  text-align: center;
  @media screen and (min-width: 1024px) {
    margin-bottom: 1rem;
  }
`

const HeaderBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
  @media screen and (min-width: 1024px) {
    margin: 1rem auto;
  }
`

const HeaderMiddleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 1rem;
  @media screen and (max-width: 375px) {
    margin: 0;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.bg2};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100vw;
  z-index: 100;
  @media screen and (min-width: 1024px) {
    height: 100vh;
    left: 0;
    padding: 2rem;
    position: fixed;
    width: ${props => props.theme.headerWidth};
  }
`

const Header = () => (
  <HeaderWrapper>
    <HeaderTitle>
      Lewis Horwood
    </HeaderTitle>
    <HeaderMiddleWrapper>
      <Avatar/>
      <HeaderBtnWrapper>
        <Social/>
        <Button to="/contact#main">Contact me</Button>
      </HeaderBtnWrapper>
    </HeaderMiddleWrapper>
    
    <Nav/>
  </HeaderWrapper>
)

export default Header
