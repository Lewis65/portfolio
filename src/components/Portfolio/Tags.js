import styled from 'styled-components'
import React from 'react'

import Tag from '../Portfolio/Tag'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
  padding: 4px 4px 0 4px;
  width: auto;
`

const Tags = (props) => {
  let tags = props.tags.map(item => 
    {
      if (item !== props.filterByTag){
        return (<Tag tag={item} handleTagClick={props.handleTagClick}/>)
      }
    }
  )
  if(props.filterByTag && props.filterByTag !== null){
    tags.unshift(<Tag tag={props.filterByTag + " X"} handleTagClick={() => props.handleTagClick(null)} activeFilter="true"/>)
  }

  return(
    <TagContainer>
      {tags}
    </TagContainer>
  )
}

export default Tags