import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'
import ProjectLinks from './ProjectLinks'
import Tags from '../shared/Tags'

const Close = styled.div`
  cursor: pointer;
  display: inline-flex;
  float: right;
  font-size: 110%;
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
  border-radius: 1rem;
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
  a {
    border-bottom: 2px solid ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.pink};
    text-decoration: none;
  }
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`

const Title = styled.h2`
  background-color: ${props => props.theme.colors.pink};
  color: white;
  display: block;
  margin: 0;
  padding: 1rem;
  text-shadow: 3px 3px 6px ${props => props.theme.colors.shadow};
`

const Thumbnail = styled(Image)`
  width: 100%;
  max-height: 100%;
  margin: 0;
  @media screen and (min-width: 1024px) {
    min-height: 20rem;
    width: 50%;
  }
`

const ProjectDetail = (props) => {

  //Used to set inner html in project description and render markdown correctly
  const description = {
    __html: props.project.description.childMarkdownRemark.html
  }

  //Array of all links related to a project
  let projectLinks = []
  function pushLinks(type) {
    if(props.project[type]){
      projectLinks.push({
        to: props.project[type],
        type: type
      })
    }
  }
  pushLinks("blog")
  pushLinks("codepen")
  pushLinks("demo")
  pushLinks("github")

  return(
    <Project>
      <Title>
        {props.project.title}
        <Close onClick={props.handleProjectClose}>
          <i className="fa fa-times-circle"/>
        </Close>
      </Title>
      <Wrapper>
        <Thumbnail
        fluid={props.project.image ? props.project.image.fluid : props.defaultProjectThumbnail.fluid}
        />
        <ProjectDetails>
          <Tags tags={props.project.tags}/>
          <ProjectBrief>
            {props.project.brief}
          </ProjectBrief>
          <ProjectDescription dangerouslySetInnerHTML={description}>
          </ProjectDescription>
          <ProjectLinks links={projectLinks}/>
        </ProjectDetails>
      </Wrapper>
    </Project>
  )
}

export default ProjectDetail