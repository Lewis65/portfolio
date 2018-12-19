import React from 'react'
import styled from 'styled-components'

import AvatarSrc from '../../images/avatar.jpg'
import BlockWrapper from '../shared/BlockWrapper'

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 200px;
  margin: 1rem auto;
  width: 200px;
`

const Avatar = () => {
  if(AvatarSrc){
    return (
      <BlockWrapper>
        <AvatarImg src={AvatarSrc}/>
      </BlockWrapper>
    )
  }
}

export default Avatar
