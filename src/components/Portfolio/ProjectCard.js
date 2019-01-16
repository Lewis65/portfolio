import React from 'react'
import styled from 'styled-components'

import Tags from '../Portfolio/Tags'

const Card = styled.div`
  background-color: white;
  border-radius: 2rem;
  box-shadow: ${props => props.theme.shadow};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  font-size: 75%;
  overflow-x: hidden;
  margin-bottom: 2rem;
  min-width: 300px;
  padding: 0;
  user-select: none;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  @media screen and (min-width: 1024px) {
    font-size: 90%;
    justify-content: space-between;
    max-width: 30%;
  }
`

const ProjectBrief = styled.div`
  flex-grow: 1;
  padding: 1rem;
`

const ProjectTitle = styled.h3`
  background-color: ${props => props.theme.colors.highlight};
  color: white;
  display: block;
  font-size: 125%;
  margin: 0;
  padding: 1rem;
`

const Thumbnail = styled.div`
  background: linear-gradient(to bottom, white, cyan) center / cover;
  background-image: url(${props => props.src});
  max-height: 300px;
  min-height: 200px;
  width: 100%;
`

//Add clickable tags, then work on project detail modal

const ProjectCard = (props) => {

  return(
    <Card>
      <ProjectTitle onClick={()=>props.handleCardClick(props.projectId)}>
        {props.project.title}
      </ProjectTitle>
      <Thumbnail src={props.project.img} onClick={()=>props.handleCardClick(props.projectId)}>
        <Tags tags={props.project.tags} handleTagClick={props.handleTagClick}></Tags>
      </Thumbnail>
      <ProjectBrief>
        {props.project.brief}
      </ProjectBrief>
    </Card>
  )
}

export default ProjectCard