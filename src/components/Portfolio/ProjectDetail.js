import React from 'react'
import styled from 'styled-components'

import ProjectLinks from './ProjectLinks'
import Tags from '../Portfolio/Tags'
import defaultProjectThumbnail from '../../images/project.jpg'

const Close = styled.div`
  align-content: center;
  border: 3px solid white;
  border-radius: 40px;
  cursor: pointer;
  display: inline-flex;
  float: right;
  height: 24px;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 24px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

const Project = styled.div`
  background-color: white;
  border-radius: 2rem;
  box-shadow: ${props => props.theme.shadow};
  box-sizing: border-box;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  font-size: 90%;
  overflow-x: hidden;
  user-select: none;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  @media screen and (min-width: 1024px) {
    font-size: 100%;
  }
`

const ProjectBrief = styled.p`
  font-weight: 600;
`

const ProjectDescription = styled.div`
  
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`

const ProjectTitle = styled.h3`
  background-color: ${props => props.theme.colors.highlight};
  box-sizing: border-box;
  color: white;
  display: block;
  font-size: 125%;
  margin: 0;
  padding: 1rem;
`

const Thumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  @media screen and (min-width: 1024px) {
    min-height: 400px;
    width: 50%;
  }
`

//Add clickable tags, then work on project detail modal

const ProjectDetail = (props) => {

  return(
    <Project>
      
      <ProjectTitle>
        {props.project.title}
        <Close onClick={props.handleProjectClose}>X</Close>
      </ProjectTitle>

      <Wrapper>
        <Thumbnail src={props.project.img || defaultProjectThumbnail}/>
        <ProjectDetails>
          <Tags tags={props.project.tags} handleTagClick={props.handleTagClick} padding="0" noMargin="true"/>
          <ProjectBrief>
            {props.project.brief}
          </ProjectBrief>
          <ProjectDescription>
            {props.project.description}
          </ProjectDescription>
          <ProjectLinks links={props.project.links}/>
        </ProjectDetails>
      </Wrapper>
    </Project>
  )
}

export default ProjectDetail