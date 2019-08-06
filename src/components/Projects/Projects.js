import React from 'react'

import CardTable from '../shared/CardTable'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import Tags from '../shared/Tags'

class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayProject: null,
      filterByTag: null
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
  
  render() {

    let items = []
    let errorRetrievingProjects = false

    if(this.props.projects && this.props.projects.length){
      items = this.props.projects.map((project, index) => {
          if (this.state.filterByTag === null || project.tags.includes(this.state.filterByTag)){
            return(
              <ProjectCard
                project={project}
                key={index}
                projectId={index.toString()}
                handleCardClick={this.handleCardClick}
                handleTagClick={this.handleTagClick}
                handleProjectClose={this.handleProjectClose}
              />
            )
          }
          return
        }
      )
    } else {
      errorRetrievingProjects = true
      items = [<span>Sorry, there was a problem retrieving my projects from Contentful.</span>]
    }

    let allTags = []

    if(!errorRetrievingProjects){
      //allTags = Array.from(new Set((projectData.map(project => project.tags)).flat())).sort()
      allTags = ['javascript', 'gatsby']
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
          <Tags tags={allTags} tagType="projectList" handleTagClick={this.handleTagClick} filterByTag={this.state.filterByTag}/>
          <CardTable>{items}</CardTable>
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