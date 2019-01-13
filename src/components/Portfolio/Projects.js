import styled from 'styled-components'
import React from 'react'

import BlockWrapper from '../shared/BlockWrapper'
import ProjectCard from './ProjectCard'
import Tags from './Tags'

//dummy data
const projectData = [
  {
    title: "My project 3",
    date: "December 2018",
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
  @media screen and (min-width: 1024px) {
    flex-direction: row;
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
    this.setState({displayProject: null})
  }

  handleTagClick = (tag) => {
    this.setState({filterByTag: tag})
  }
  
  render() {

    let items = projectData.map((project, index) => {
        if (this.state.filterByTag === null || project.tags.includes(this.state.filterByTag)){
          return(
           <ProjectCard project={project} key={index} projectId={index.toString()} handleCardClick={this.handleCardClick} handleTagClick={this.handleTagClick}/>
          )
        }
      }
    )

    if(items.length === 0){
      items = <p>Nothing here :(</p>
    }
    const dupedTags = projectData.map(project => project.tags).flat().sort()
    const allTags = Array.from(new Set(dupedTags))

    return (
      <React.Fragment>
        <Tags tags={allTags} handleTagClick={this.handleTagClick} filterByTag={this.state.filterByTag}/>
        <ProjectWrapper>
          {items}
        </ProjectWrapper>
      </React.Fragment>
    )
  }
}

export default Projects