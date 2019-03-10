import React from 'react'
import styled from 'styled-components'

import AvatarSrc from '../../images/avatar.jpg'
import BlockWrapper from '../shared/BlockWrapper'

const AvatarImg = styled.img`
  height: 120px;
  width: 120px;
  @media screen and (min-width: 1024px) {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 1rem;
  }
`

const Avatar = () => (
  <BlockWrapper>
    <AvatarImg src={AvatarSrc}/>
  </BlockWrapper>
)

export default Avatar
