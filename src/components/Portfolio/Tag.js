import styled from 'styled-components'
import React from 'react'

const TagLink = styled.a`
  background-color: ${props => props.activeFilter==="true" ? props.theme.colors.activeShade : props.theme.colors.active};
  border-radius: 20px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: ${props => props.inFilters ? "14px" : "12px"};
  font-weight: 600;
  margin-bottom: 4px;
  margin-right: 6px;
  padding: ${props => props.inFilters ? "4px 12px" : "2px 8px"};
  &:hover {
    background-color: ${props => props.theme.colors.activeShade};
  }
  &:last-child {
    margin-right: 0;
  }
`

const Tag = (props) => {
  return(
    <TagLink tag={props.tag} onClick={()=>props.handleTagClick(props.tag)} activeFilter={props.activeFilter} inFilters={props.filters}>
      {props.tag}
    </TagLink>
  )
}

export default Tag