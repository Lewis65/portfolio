import React from 'react'
import styled from 'styled-components'
import Link from '../shared/Link'

//classNames for relevant fontAwesome icons
const icons = {
  blog: "fas fa-align-left",
  codepen: "fab fa-codepen",
  default: "fab fa-external-link-alt",
  demo: "fas fa-desktop",
  github: "fab fa-github"
}

const LinkGroup = styled.div`
  display: flex;
  margin-top: 1rem;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const ProjectLink = styled(Link)`
  border: 2px solid ${props => props.theme.colors.highlight};
  border-radius: 8px;
  color: ${props => props.theme.colors.highlight};
  display: flex;
  flex: 1;
  font-weight: 600;
  justify-content: center;
  margin-right: 0.5rem;
  padding: 0.25rem;
  text-decoration: none;
  &:hover {
    animation: lighten ease-out 0.1s forwards;
  }
  span {
    margin-left: 0.25rem;
  }
  i {
    font-size: 110%;
  }
  @keyframes lighten {
    0% {
      border-color: ${props => props.theme.colors.darkblue};
      color: ${props => props.theme.colors.darkblue};
    }
    100% {
      border-color: ${props => props.theme.colors.lightblue};
      color: ${props => props.theme.colors.lightblue};
    }
  }
  @media screen and (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

//Create link group for 2-3 links using different preset icons depending on their anchor text
const ProjectLinks = (props) => {
  if(props.links !== undefined){
    let links = props.links.map(link => 
      <ProjectLink to={link.to}>
        <i className={icons[link.type]||icons.default}/>
        <span>{link.text}</span>
      </ProjectLink>
    )
    return (<LinkGroup>{links}</LinkGroup>)
  } else {
    return null
  }
}

export default ProjectLinks