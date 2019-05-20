import React from 'react'
import styled from 'styled-components'

import HeroImgSrc from '../../images/hero1.jpg'

const HeroWrapper = styled.div`
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
  position: absolute;
  width: 100vw;
  z-index: 2;
  @media screen and (min-width: 1024px) {
    left: ${props => props.theme.headerWidth};
    width: calc(100vw - ${props => props.theme.headerWidth});
  }
`

const Hero = () => (
  <React.Fragment>
    <HeroWrapper/>
    <HeroShade/>
  </React.Fragment>
)

export default Hero