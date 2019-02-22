import styled from 'styled-components'
import React from 'react'

import Tag from './Tag'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${props => props.tagType !== "projectList" ? "4px" : "0"};
  width: auto;
`

const Tags = (props) => {
  let tags = []
  switch (props.tagType){
    case 'blog':
      tags = props.tags.map(item => {
        return <Tag large tag={item} tagType={props.tagType}/>
      })
      break;
    case 'projectCard':
      tags = props.tags.map(item => {
        return <Tag tag={item} tagType={props.tagType} handleTagClick={props.handleTagClick} filters={props.filters}/>
      })
      break;
    case 'projectList':
      tags = props.tags.map(item => {
        return <Tag large tag={item} tagType={props.tagType} handleTagClick={props.handleTagClick} filters={props.filters}/>
      })
      if(props.filterByTag && props.filterByTag !== null){
        tags.unshift(<Tag tag={props.filterByTag + " X"} tagType={props.tagType} handleTagClick={() => props.handleTagClick(null)} activeFilter="true" filters={props.filters}/>)
      }
      break;
    default:
      tags = props.tags.map(item => {
        return <Tag tag={item} tagType={props.tagType}/>
      })
      break;
  }

  return(
    <TagContainer filters={props.filters}>
      {tags}
    </TagContainer>
  )
}

export default Tags