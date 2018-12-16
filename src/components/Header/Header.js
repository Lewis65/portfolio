import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>
      {siteTitle}
    </h1>
    <Social/>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
