import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const LinkGroup = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit);
`

const ProjectLink = styled.a`
  border: 2px solid ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.highlight};
  display: inline-flex;
  &:hover {
    border-color: ${props => props.theme.colors.active};
  }
  span {
    margin-left: 4px;
    visibility: hidden;
    @media screen and (min-width: 1024px) {
      visibility: visible;
    }
  }
`

//Create link group for 2-3 links using different preset icons depending on their anchor text
const ProjectLinks = (props) => {
  if(props.links !== undefined){
    let links = props.links.map(link => {
      <ProjectLink href={link.href}>
        <i className={"fab " + icons[link.type]||icons.default}/>
        <span>{icons.link.text}</span>
      </ProjectLink>
    })
    return (<LinkGroup>{links}</LinkGroup>)
  } else {
    return
  }
}

export default ProjectLinks