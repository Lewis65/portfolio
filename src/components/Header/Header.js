import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import Avatar from './Avatar'
import Nav from './Nav'
import Social from './Social'

const HeaderTitle = styled(Link)`
  color: white;
  font-family: ${props => props.theme.fonts.header};
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  text-decoration: none;
  text-shadow: 0.125rem 0.125rem ${props => props.theme.colors.shadow};
  @media screen and (min-width: 1024px) {
    font-size: 300%;
    margin-bottom: 1rem;
    transition: color 0.15s ease-out;
    &:hover {
      color: ${props => props.theme.colors.pink};
    }
  }
`

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 1024px) {
    flex-direction: column-reverse;
  }
`

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.darkblue};
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

const Me = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderInfo>
      <Avatar/>
      <Me>
        <HeaderTitle to='/'>
          Lewis Horwood
        </HeaderTitle>
        <Social/>
      </Me>    
    </HeaderInfo>
    <Nav/>
  </HeaderWrapper>
)

export default Header
