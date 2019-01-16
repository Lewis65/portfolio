import React from 'react'
import styled from 'styled-components'

import Tags from '../Portfolio/Tags'

const Close = styled.div`
  align-content: center;
  border: 3px solid white;
  border-radius: 40px;
  cursor: pointer;
  display: inline-flex;
  float: right;
  height: 32px;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 32px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1rem;
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
  margin-bottom: 2rem;
  user-select: none;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  @media screen and (min-width: 1024px) {
    font-size: 110%;
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
  width: 50%;
`

const ProjectTitle = styled.h3`
  background-color: ${props => props.theme.colors.highlight};
  color: white;
  display: block;
  font-size: 150%;
  margin: 0;
  padding: 1rem;
`

const Thumbnail = styled.div`
  flex: 0 0;
  height: auto;
  width: 100%;
  @media screen and (min-width: 1024px) {
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
        <Thumbnail>
          <img src={props.project.img}/>
        </Thumbnail>
        <ProjectDetails>
          <ProjectBrief>
            {props.project.brief}
          </ProjectBrief>
          <Tags tags={props.project.tags} handleTagClick={props.handleTagClick}/>
          <ProjectDescription>
            {props.project.description}
          </ProjectDescription>
          <div>[Links to repo, demo, etc]</div>
        </ProjectDetails>
      </Wrapper>
    </Project>
  )
}

export default ProjectDetail