import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Card from '../shared/Card'
import CardTable from '../shared/CardTable'
import Tags from '../shared/Tags'
import ProjectDetail from './ProjectDetail'

const Brief = styled.p`
  margin: 1rem 0;
`

const Thumbnail = styled(Image)`
height: 350px;
  width: 100%;
`

const Projects = (props) => {

  const [tagToFilterBy, setTagToFilterBy] = useState(null);
  const [projectToDisplay, setProjectToDisplay] = useState(null);
  const [projectCards, setProjectCards] = useState(props.projects);

  useEffect(() => {
    if(tagToFilterBy === null){
      setProjectCards(props.projects)
    } else {
      let projects = props.projects.filter(project => {
        return project.tags.includes(tagToFilterBy)
      })
      setProjectCards(projects)
    }
  }, [tagToFilterBy])

  //Get a Set of all tags used in Contentful projects
  const tagsOfAllProjects = Array.from(
    new Set(
      props.projects
      .map(project => project.tags)
      .flat()
    )
  ).sort()

  let cards = projectCards.map((project, index) => {
    return <Card
      project={project}
      title={project.title}
      key={index}
      onClick={() => setProjectToDisplay(project)}
      handleProjectClose={() => setProjectToDisplay(null)}
    >
      <Thumbnail fluid={project.image ? project.image.fluid : props.defaultProjectThumbnail.fluid}/>
      <Brief>{project.brief}</Brief>
      <Tags tags={project.tags} handleTagClick={setTagToFilterBy}/>
    </Card>
  })

  return <React.Fragment>
    <Tags tags={tagsOfAllProjects} handleTagClick={setTagToFilterBy}/>
    {projectToDisplay ? <ProjectDetail project={projectToDisplay}/> : <CardTable>{cards}</CardTable>}
  </React.Fragment>

}

export default Projects