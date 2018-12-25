import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/shared/Heading'
import HeroImgSrc from '../images/hero1.jpg'

const Content = styled.div`
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  z-index: 10;
  @media screen and (min-width: 1024px) {
    margin-top: 8rem;
  }
  p {
    color: ${props => props.theme.colors.bg1};
    line-height: 150%;
    @media screen and (min-width: 1024px) {
      font-size: 130%;
    }
  }
  
`

const Hero = styled.div`
  background-attachment: fixed;
  background-image: url(${HeroImgSrc});
  background-position: bottom center;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  max-width: 100vw;
  position: absolute;
  width: 100%;
  z-index: 1;
  @media screen and (min-width: 1024px) {
    left: ${props => props.theme.headerWidth};
    width: calc(100vw - ${props => props.theme.headerWidth});
  }
`

const HeroShade = styled.div`
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  max-width: 100vw;
  position: absolute;
  z-index: 2;
  @media screen and (min-width: 1024px) {
    left: ${props => props.theme.headerWidth};
    width: calc(100vw - ${props => props.theme.headerWidth});
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Content>
      <Heading>Hi. I'm Lewis.</Heading>
      <p>
        I'm a full-stack web developer based in Seoul, South Korea. I like making handy things on the internet.
      </p>
    </Content>
    <HeroShade>
    </HeroShade>
    <Hero />
  </Layout>
)

export default IndexPage