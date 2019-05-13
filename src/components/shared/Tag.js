import styled from 'styled-components'
import React from 'react'

import Link from './Link'

const TagLink = styled(Link)`
  background-color: ${props => props.activeFilter==="true" ? props.theme.colors.pink : props.theme.colors.lightblue};
  border-radius: 20px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: ${props => props.large ? "14px" : "12px"};
  font-weight: 600;
  margin-bottom: 4px;
  margin-right: 6px;
  padding: ${props => props.padding || props.large ? "4px 7px" : "2px 6px"};
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 1024px){
    font-size: ${props => props.large ? "16px" : "13px"}
  }
`

const TagLinkWithHover = styled(TagLink)`
  &:hover {
    background-color: ${props => props.theme.colors.pink};
  }
`

const CloseButtonWrapper = styled.span`
  float: right;
  margin: 0 -2px 0 6px;
`

const CloseButton = () => {
  return <CloseButtonWrapper>
    <i className="fa fa-times-circle"/>
  </CloseButtonWrapper>
}

const Tag = (props) => {
  switch (props.tagType) {
    case 'blog':
      return <TagLinkWithHover large to={`/blog/tags/${props.tag}`}>
        {props.tag}
      </TagLinkWithHover>
    case 'blogCard':
      return <TagLinkWithHover to={`/blog/tags/${props.tag}`}>
        {props.tag}
      </TagLinkWithHover>
    case 'projectCard':
      return <TagLink
      tag={props.tag}
      inFilters={props.filters}>
        {props.tag}
      </TagLink>
    case 'projectList':
      return <TagLinkWithHover large
      tag={props.tag}
      onClick={()=>props.handleTagClick(props.tag)}
      activeFilter={props.activeFilter}
      inFilters={props.filters}>
        {props.tag}
        {props.activeFilter === "true" ? <CloseButton/> : null}
      </TagLinkWithHover>
    default:
      return <TagLink>{props.tag}</TagLink>
  }
}

export default Tag