import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Card from '../shared/Card'
import CardTable from '../shared/CardTable'
import Tags from '../shared/Tags'
import FilterTags from './FilterTags'
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

  //Map all the projects to cards
  let cards = projectCards.map((project, index) => {
    return <Card
      project={project}
      title={project.title}
      key={index}
      handleCardClick={() => setProjectToDisplay(project)}
    >
      <Thumbnail fluid={project.image ? project.image.fluid : props.defaultProjectThumbnail.fluid} onClick={() => setProjectToDisplay(project)}/>
      <Brief>{project.brief}</Brief>
      <Tags tags={project.tags} handleTagClick={setTagToFilterBy} clickable="true"/>
    </Card>
  })

  return <React.Fragment>
    {projectToDisplay ? 
    <ProjectDetail project={projectToDisplay} handleProjectClose={() => setProjectToDisplay(null)}/> : 
    <><FilterTags tags={tagsOfAllProjects} handleTagClick={setTagToFilterBy} tagToFilterBy={tagToFilterBy}/><CardTable>{cards}</CardTable></>}
  </React.Fragment>

}

export default Projects