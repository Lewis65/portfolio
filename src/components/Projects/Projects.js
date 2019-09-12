import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Card from '../shared/Card'
import CardTable from '../shared/CardTable'
import Tags from '../shared/Tags'
import ProjectDetail from './ProjectDetail'

const Brief = styled.p`
  margin: 1rem 0;
`

const Thumbnail = styled.div`
  width: 100%;
  margin: 0;
`

class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayProject: null,
      filterByTag: null,
      mappedProjects: null
    }
  }

  handleCardClick = (index) => {
    this.setState({displayProject: this.props.projects[index]})
  }

  handleProjectClose = () => {
    this.setState({displayProject: null})
  }

  handleTagClick = (tag) => {
    this.setState({displayProject: null, filterByTag: tag})
  }

  mapProjects = () => {
    let result = {
      error: false,
      projects: []
    }

    if(this.props.projects && this.props.projects.length){
      result.projects = this.props.projects.map((project, index) => {
        console.log(project)
          if (this.state.filterByTag === null || project.tags.includes(this.state.filterByTag)){
            return(
              <Card
                project={project}
                title={project.title}
                key={index}
                projectId={index.toString()}
                handleCardClick={() => this.handleCardClick(index)}
                handleTagClick={this.handleTagClick}
                handleProjectClose={this.handleProjectClose}
              >
                <Thumbnail>
                  <Image fluid={project.image ? project.image.fluid : this.props.defaultProjectThumbnail.fluid}/>
                </Thumbnail>
                <Brief>{project.brief}</Brief>
                <Tags tags={project.tags}/>
              </Card>
            )
          } else {
            return null
          }
        }
      )
    } else {
      result.error = true
      result.projects = [<span>Sorry, there was a problem retrieving my projects from Contentful.</span>]
    }

    this.setState({mappedProjects: result})
  }
  
  componentWillMount() {
    this.mapProjects()
  }

  render() {

    let mappedProjects = this.state.mappedProjects

    let allTags = []

    if(!mappedProjects.error){
      allTags = Array.from(new Set((this.props.projects.map(project => project.tags)).flat())).sort()
    }

    if(this.state.filterByTag !== null){
      let indexOfFilteredTag = allTags.indexOf(this.state.filterByTag)
      allTags.splice(indexOfFilteredTag, 1)
    }

    let children;
    if(this.state.displayProject !== null){
      children = <ProjectDetail project={this.state.displayProject} handleProjectClose={this.handleProjectClose} handleTagClick={this.handleTagClick}/>
    } else {
      children = (
        <React.Fragment>
          <h2>Tags:</h2>
          <Tags tags={allTags} tagType="projectList" handleTagClick={this.handleTagClick} filterByTag={this.state.filterByTag}/>
          <CardTable>{mappedProjects.projects}</CardTable>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

export default Projects