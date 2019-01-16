import styled from 'styled-components'
import React from 'react'

import BlockWrapper from '../shared/BlockWrapper'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import Tags from './Tags'

//dummy data
const projectData = [
  {
    title: "My project 3",
    date: "December 2018",
    brief: "Here's the third project I ever made.",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: {
      code: "https://github.com",
      demo: "https://codepen.com"
    },
    tags: ["react", "javascript", "frontend"],
    img: "https://nwanesthesia.com/wp-content/uploads/2014/01/mk_1.jpg"
  },
  {
    title: "My project 2",
    date: "November 2018",
    brief: "Here's the second project I ever made. I used a lot of neato thingies. Unfortunately the brief is longer than usual and might mess up some spacing and alignment. Oh no.",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: {
      code: "https://github.com",
      demo: "https://codepen.com"
    },
    tags: ["react", "javascript", "frontend"],
    img: "https://nwanesthesia.com/wp-content/uploads/2014/01/mk_1.jpg"
  },
  {
    title: "My project 1",
    date: "October 2018",
    brief: "Here's the first project I ever made. It almost works!",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: {
      code: "https://github.com",
      demo: "https://codepen.com"
    },
    tags: ["react", "javascript", "frontend", "backend", "redux", "gatsby", "typescript", "reallylongtagthatmightbreaksomething"]
  }
]

const ProjectWrapper = styled(BlockWrapper)`
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1024px) {
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
  }
`

class Projects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      displayProject: null,
      filterByTag: null
    }
  }

  handleCardClick = (index) => {
    this.setState({displayProject: projectData[index]})
  }

  handleProjectClose = () => {
    console.log("goose")
    this.setState({displayProject: null})
  }

  handleTagClick = (tag) => {
    this.setState({displayProject: null, filterByTag: tag})
  }
  
  render() {

    let items = projectData.map((project, index) => {
        if (this.state.filterByTag === null || project.tags.includes(this.state.filterByTag)){
          return(
           <ProjectCard project={project} key={index} projectId={index.toString()} handleCardClick={this.handleCardClick} handleTagClick={this.handleTagClick} handleProjectClose={this.handleProjectClose}/>
          )
        }
      }
    )

    if(items.length === 0){
      items = <p>Nothing here :(</p>
    }
    const dupedTags = projectData.map(project => project.tags).flat().sort()
    const allTags = Array.from(new Set(dupedTags))

    let children;
    if(this.state.displayProject !== null){
      children = <ProjectDetail project={this.state.displayProject}/>
    } else {
      children = (
        <React.Fragment>
          <Tags tags={allTags} handleTagClick={this.handleTagClick} filterByTag={this.state.filterByTag} filters="true"/>
          <ProjectWrapper>{items}</ProjectWrapper>
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