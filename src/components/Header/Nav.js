import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  border-bottom: 4px solid ${props => props.active ? props.theme.colors.active : props.theme.colors.highlight};
  color: ${props => props.theme.colors.body};
  flex-grow: 1;
  font-size: 120%;
  font-weight: 600;
  padding: 0.25rem;
  text-align: center;
  text-decoration: none;
  &:hover {
      border-bottom: 4px solid ${props => props.theme.colors.activeDark}
  }
  @media screen and (min-width: 1024px) {
    margin: 0.5rem 0;
    text-align: left;
  }
`

const NavWrapper = styled.nav`
  background: ${props => props.theme.colors.bg1};
  display: flex;
  margin-top: 1rem;
  position: relative;
  right: 0;
  width: 100%;
  @media screen and (min-width: 1024px) {
    background: none;
    bottom: 5rem;
    flex-direction: column;
    position: absolute;
    width: auto;
  }
`

const Nav = () => (
  <NavWrapper>
    <NavLink to='/'>about</NavLink>
    <NavLink to='/portfolio'>portfolio</NavLink>
    <NavLink to='/contact'>contact</NavLink>
    <NavLink to='/blog'>blog</NavLink>
  </NavWrapper>
)

export default Nav