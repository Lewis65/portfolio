import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  border-bottom: 4px solid ${props => props.active ? props.theme.colors.tangerine : props.theme.colors.rajah};
  color: ${props => props.theme.colors.gunmetal};
  font-size: 120%;
  font-weight: 600;
  margin: 0.5rem 0;
  padding: 0.25rem;
  text-decoration: none;
  &:hover {
      border-bottom: 4px solid ${props => props.theme.colors.tangerine}
  }
`

const NavWrapper = styled.nav`
  bottom: 5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
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