import React from 'react'
import styled from 'styled-components'

import Tags from '../shared/Tags'
import defaultProjectThumbnail from '../../images/project.jpg'

const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadow};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 90%;
  overflow-x: hidden;
  margin-bottom: 1rem;
  padding: 0;
  user-select: none;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  &:hover {
    h3 {
      background-color: ${props => props.theme.colors.lightblue};
    }
  }
`

const ProjectBrief = styled.div`
  flex-grow: 1;
  padding: 1rem;
`

const ProjectTitle = styled.h3`
  background-color: ${props => props.theme.colors.darkblue};
  color: white;
  display: block;
  font-size: 125%;
  margin: 0;
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    transition: background-color 0.15s ease-out;
  }
`

const Thumbnail = styled.div`
  background: url(${props => props.src}) center / cover;
  max-height: 300px;
  min-height: 200px;
  width: 100%;
`

const ProjectCard = (props) => {
  return <Card>
    <ProjectTitle onClick={()=>props.handleCardClick(props.projectId)}>
      {props.project.title}
    </ProjectTitle>
    <Thumbnail src={props.project.img || defaultProjectThumbnail} onClick={()=>props.handleCardClick(props.projectId)}>
      <Tags tags={props.project.tags.sort()} tagType="projectCard"></Tags>
    </Thumbnail>
    <ProjectBrief>
      {props.project.brief}
    </ProjectBrief>
  </Card>
}

export default ProjectCard