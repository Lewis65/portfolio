import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'
import HeroImgSrc from '../../images/hero1.jpg'

const HeroImage = styled.div`
  background-attachment: fixed;
  background-image: url(${HeroImgSrc});
  background-position: center;
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 1;
`

const HeroShade = styled.div`
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 2;
`

const Hero = () => (
  <React.Fragment>
    <HeroImage/>
    <HeroShade/>
  </React.Fragment>
)

export default Hero