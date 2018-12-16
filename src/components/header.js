import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  padding: 2rem;
  width: 100vw;
  @media screen and (min-width: 1024px) {
    height: 100vh;
    left: 0;
    position: fixed;
    width: 400px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1>
      {siteTitle}
    </h1>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
