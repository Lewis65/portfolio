import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.colors.highlight};
  box-shadow: 5px 5px ${props => props.theme.colors.bg2};
  box-sizing: border-box;
  cursor: pointer;
  font-size: 75%;
  width: 90%;
  margin: 0.5rem;
  min-height: 150px;
  padding: 0.5rem;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  @media screen and (min-width: 1024px) {
    font-size: 90%;
    margin: 1rem;
    padding: 1rem;
    width: 33%;
  }
`

const ProjectCard = (props) => {

  return(
    <Card onClick={()=>props.handleCardClick(props.projectId)}>
      {props.project.title}
    </Card>
  )
}

export default ProjectCard