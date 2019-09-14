import styled from 'styled-components'
import React from 'react'

import Link from './Link'

const TagLink = styled(Link)`
  align-items: center;
  background-color: ${props => props.theme.colors.lightblue};
  border-radius: 0.5rem;
  color: white;
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.25rem;
  overflow: hidden;
  padding: 0.25rem;
  text-decoration: none;
  &.clickable {
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.pink};
    }
  }
`

const Tag = (props) => {
  if(props.linkPrefix){
    return <TagLink className={`${props.clickable && 'clickable '}${props.className || ''}`} to={`${props.linkPrefix}/${props.tag}`}>
      {props.children || `#${props.tag}`}
    </TagLink>
  } else {
    return <TagLink className={`${props.clickable && 'clickable '}${props.className || ''}`} onClick={() => props.handleTagClick(props.tag)}>
      {props.children || `#${props.tag}`}
    </TagLink>
  }
  
}

export default Tag