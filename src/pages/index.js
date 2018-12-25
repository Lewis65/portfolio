import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroImgSrc from '../images/hero1.jpg'

const Hero = styled.div`
background-attachment: fixed;
  background-image: url(${HeroImgSrc});
  background-position: bottom center;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 100vw;
  position: absolute;
  width: 100%;
  z-index: 0;
  @media screen and (min-width: 1024px) {
    left: ${props => props.theme.headerWidth};
    max-width: calc(100vw - ${props => props.theme.headerWidth});
    width: calc(100vw - ${props => props.theme.headerWidth});
  }
`

const HeroShade = styled.div`
  background: ${props => props.theme.colors.body};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 100vw;
  opacity: 0.5;
  z-index: 1;
  @media screen and (min-width: 1024px) {
    left: ${props => props.theme.headerWidth};
    max-width: calc(100vw - ${props => props.theme.headerWidth});
    width: calc(100vw - ${props => props.theme.headerWidth});
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <HeroShade/>
    <Hero>
    </Hero>
  </Layout>
)

export default IndexPage