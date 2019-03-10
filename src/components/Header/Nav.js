import styled from 'styled-components'
import React from 'react'
import ButtonLink from '../shared/ButtonLink'

const NavLink = styled(ButtonLink)`
  background-color: ${props => props.cta ? props.theme.colors.pink : "white"};
  border-radius: 0;
  color: ${props => props.cta ? "white" : props.theme.colors.darkblue};
  flex-grow: 1;
  margin: 0;
  @media screen and (min-width: 1024px) {
    border-radius: 1rem;
    margin: 0.5rem 0;
    transition: background-color 0.15s ease-out, color 0.15s ease-out;
    &:hover {
      background-color: ${props => props.cta ? props.theme.colors.red : "white"};
      color: ${props => props.cta ? "white" : props.theme.colors.lightblue};
    }
  }
  @media screen and (max-width: 1024px) {
    box-shadow: none;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  position: relative;
  right: 0;
  width: 100%;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    margin-top: 1rem;
    width: auto;
  }
`

const Nav = () => (
  <NavWrapper id="nav">
    <NavLink to='/contact' cta>contact me</NavLink>
    <NavLink to='/projects'>projects</NavLink>
    <NavLink to='/blog'>blog</NavLink>
  </NavWrapper>
)

export default Nav