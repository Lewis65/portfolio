import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.colors.highlight};
  box-shadow: 5px 5px ${props => props.theme.colors.bg2};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 75%;
  width: 90%;
  margin: 1rem;
  padding: 0;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  @media screen and (min-width: 1024px) {
    font-size: 90%;
    margin: 2rem;
    width: 33%;
  }
`

const ProjectTitle = styled.h3`
  background-color: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.bg2};
  display: block;
  font-size: 125%;
  margin: 0;
  padding: 0.5rem;
`

//Add clickable tags, thumbnails, then work on project detail modal

const ProjectCard = (props) => {

  return(
    <Card onClick={()=>props.handleCardClick(props.projectId)}>
      <ProjectTitle >
        {props.project.title}
      </ProjectTitle>
    </Card>
  )
}

export default ProjectCard