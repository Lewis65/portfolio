import React from 'react'
import styled from 'styled-components'

import Tags from '../Portfolio/Tags'

const Card = styled.div`
  background-color: white;
  border: 0 solid ${props => props.theme.colors.highlight};
  border-radius: 1rem;
  box-shadow: 5px 5px ${props => props.theme.colors.bg2};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 75%;
  overflow-x: hidden;
  width: 90%;
  margin: 1rem;
  padding: 0;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  @media screen and (min-width: 1024px) {
    flex: 1 1 350px;
    font-size: 90%;
    margin: 2rem;
    width: 33%;
  }
`

const ProjectDescription = styled.div`
  border-top: 0 solid ${props => props.theme.colors.highlight};
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
  max-height: 200px;
  min-height: 200px;
  width: 100%;
  @media screen and (min-width: 1024px) {
    max-height: 200px;
  }
`

//Add clickable tags, thumbnails, then work on project detail modal

const ProjectCard = (props) => {

  return(
    <Card onClick={()=>props.handleCardClick(props.projectId)}>
      <ProjectTitle >
        {props.project.title}
      </ProjectTitle>
      <Thumbnail src={props.project.img}>
        <Tags tags={props.project.tags}></Tags>
      </Thumbnail>
      <ProjectDescription>
        {props.project.description}
      </ProjectDescription>
    </Card>
  )
}

export default ProjectCard