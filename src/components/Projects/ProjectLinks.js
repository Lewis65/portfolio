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
  border: 2px solid ${props => props.theme.colors.lightblue};
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.body};
  display: flex;
  flex: 1;
  font-weight: 600;
  justify-content: center;
  margin-right: 0.5rem;
  padding: 0.25rem;
  text-decoration: none;
  span {
    margin-left: 0.5rem;
  }
  i {
    font-size: 110%;
  }
  &:hover {
    border-color: ${props => props.theme.colors.pink};
  }
  @media screen and (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
    transition: border-color 0.15s ease-out, color 0.15s ease-out;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

//Create link group for 2-3 links using different preset icons depending on their anchor text
const ProjectLinks = (props) => {
  if(props.links !== undefined){
    let links = props.links.map((link, index) => 
      <ProjectLink to={link.to} key={index}>
        <i className={icons[link.type]||icons.default}/>
        <span>{link.type}</span>
      </ProjectLink>
    )
    return (<LinkGroup>{links}</LinkGroup>)
  } else {
    return null
  }
}

export default ProjectLinks