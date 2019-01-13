import styled from 'styled-components'
import React from 'react'

const TagLink = styled.a`
  background-color: ${props => props.activeFilter=="true" ? "#CCC" : props.theme.colors.active};
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  font-weight: 600;
  height: 16px;
  margin-bottom: 4px;
  margin-right: 6px;
  padding: 2px 8px;
  &:hover {
    background-color: ${props => props.theme.colors.active};
  }
  &:last-child {
    margin-right: 0;
  }
`

const Tag = (props) => {
  return(
    <TagLink tag={props.tag} onClick={()=>props.handleTagClick(props.tag)} activeLink={props.activeLink}>
      {props.tag}
    </TagLink>
  )
}

export default Tag