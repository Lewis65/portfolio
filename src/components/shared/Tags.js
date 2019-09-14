import styled from 'styled-components'
import React from 'react'

import Tag from './Tag'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem;
  width: auto;
`

const Tags = (props) => {
  let tags = props.tags.map((tag, key) => {
    return <Tag 
      key={key} 
      tag={tag} 
      handleTagClick={props.handleTagClick}
      linkPrefix={props.linkPrefix}
      clickable={props.clickable}
    />
  })

  return(
    <TagContainer>
      {tags}
    </TagContainer>
  )
}

export default Tags