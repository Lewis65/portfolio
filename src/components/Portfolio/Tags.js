import styled from 'styled-components'
import React from 'react'

import Tag from '../Portfolio/Tag'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 4px 0 4px;
  width: 100%;
`

const Tags = (props) => {
  const tags = props.tags.map(item => 
    <Tag tag={item}>{item}</Tag>
  )
  return(
    <TagContainer>
      {tags}
    </TagContainer>
  )
}

export default Tags