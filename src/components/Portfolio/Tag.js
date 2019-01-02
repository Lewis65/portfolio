import styled from 'styled-components'
import React from 'react'

const TagLink = styled.a`
  background-color: ${props => props.theme.colors.activeShade};
  border-radius: 12px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  font-weight: 600;
  height: 16px;
  margin-bottom: 4px;
  margin-right: 6px;
  padding: 0 6px;
  &:hover {
    background-color: ${props => props.theme.colors.active};
  }
  &:last-child {
    margin-right: 0;
  }
`

const Tag = (props) => {
  return(
    <TagLink tag={props.tag}>
      {props.tag}
    </TagLink>
  )
}

export default Tag