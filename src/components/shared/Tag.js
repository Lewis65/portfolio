import styled from 'styled-components'
import React from 'react'

import Link from './Link'

const TagLink = styled(Link)`
  background-color: ${props => props.theme.colors.lightblue};
  border-radius: 0.5rem;
  color: white;
  display: inline-flex;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.25rem;
  padding: 0.25rem;
  text-decoration: none;
`

const CloseButtonWrapper = styled.span`
  float: right;
  margin: 0 -0.25rem 0 0.25rem;
`

const CloseButton = () => {
  return <CloseButtonWrapper>
    <i className="fa fa-times-circle"/>
  </CloseButtonWrapper>
}

const Tag = (props) => {
  if(props.linkPrefix){
    return <TagLink to={`${props.linkPrefix}/${props.tag}`}>#{props.tag}</TagLink>
  } else {
    return <TagLink onClick={() => props.handleTagClick(props.tag)}>#{props.tag}</TagLink>
  }
  
}

export default Tag