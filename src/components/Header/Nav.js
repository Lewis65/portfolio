import styled from 'styled-components'
import React from 'react'
import ButtonLink from '../shared/ButtonLink'

const NavLink = styled(ButtonLink)`
  background-color: white;
  border-radius: 0;
  color: ${props => props.theme.colors.body};
  flex-grow: 1;
  margin: 0;
  @media screen and (min-width: 1024px) {
    border-bottom: 0.25rem solid ${props => props.theme.colors.lightblue};
    margin-top: 1rem;
    transition: border-color 0.15s ease-out;
    &:hover {
      border-color: ${props => props.theme.colors.pink};
    }
  }
`

const NavWrapper = styled.nav`
  display: flex;
  position: relative;
  right: 0;
  width: 100%;
  @media screen and (min-width: 1024px) {
    align-items: flex-end;
    flex-direction: column;
    margin-top: 1rem;
    width: auto;
  }
`

const Nav = () => (
  <NavWrapper id="nav">
    <NavLink to='/contact'>contact me</NavLink>
    <NavLink to='/projects'>projects</NavLink>
    <NavLink to='/blog'>blog</NavLink>
  </NavWrapper>
)

export default Nav