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
  opacity: 0.9;
  padding: 0;
  transition: opacity 0.15s ease-out;
  user-select: none;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  &:hover {
    opacity: 1;
    h2 {
      text-shadow: 3px 3px 6px ${props => props.theme.colors.pink};
    }
  }
`

const ProjectBrief = styled.div`
  flex-grow: 1;
  padding: 1rem;
`

const ProjectTitle = styled.h2`
  background-image: linear-gradient(130deg, ${props => props.theme.colors.darkblue}, ${props => props.theme.colors.pink});
  color: white;
  display: block;
  margin: 0;
  padding: 1rem;
  text-shadow: 3px 3px 6px ${props => props.theme.colors.shadow};
  transition: color 0.15s ease-out, text-shadow 0.15s ease-out;
`

const Thumbnail = styled.div`
  background: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-height: 300px;
  min-height: 200px;
  width: 100%;
`

const ProjectCard = (props) => {

  let image = defaultProjectThumbnail
  if(props.project.image && props.project.image.fluid){
    image = props.project.image.fluid.src
  }

  return <Card>
    <ProjectTitle onClick={()=>props.handleCardClick(props.projectId)}>
      {props.project.title}
    </ProjectTitle>
    <Thumbnail src={image} onClick={()=>props.handleCardClick(props.projectId)}>
      <Tags tags={props.project.tags.sort()} tagType="projectCard"></Tags>
    </Thumbnail>
    <ProjectBrief>
      {props.project.brief}
    </ProjectBrief>
  </Card>
}

export default ProjectCard