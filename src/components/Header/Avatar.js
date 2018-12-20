import React from 'react'
import styled from 'styled-components'

import AvatarSrc from '../../images/avatar.jpg'
import BlockWrapper from '../shared/BlockWrapper'

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  @media screen and (min-width: 1024px) {
    height: 200px;
    width: 200px;
    margin: 1rem auto;
  }
`

const Avatar = () => (
  <BlockWrapper>
    <AvatarImg src={AvatarSrc}/>
  </BlockWrapper>
)

export default Avatar
