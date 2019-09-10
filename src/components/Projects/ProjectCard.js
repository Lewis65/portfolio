import React from 'react'
import styled from 'styled-components'

import Card from '../shared/Card'

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