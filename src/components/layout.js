import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './theme.js'
import Header from './Header/header'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    color: ${props => props.theme.colors.body};
    margin: 0;
  }
`

const Main = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    margin-left: ${props => props.theme.headerWidth};
    width: calc(100% - ${props => props.theme.headerWidth});
  }
`

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.bg1};
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.body};
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={Theme}>
          <React.Fragment>
            <Helmet>
              <link href="https://fonts.googleapis.com/css?family=Montserrat|Staatliches" rel="stylesheet"/>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
            </Helmet>
            <GlobalStyle></GlobalStyle>
            <Wrapper>
              <Header/>
              <Main id="main">
                {children}
              </Main>
            </Wrapper>
          </React.Fragment>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
