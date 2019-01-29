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
    description: "Here's a project I made up just now so that I have some dummy data to make the site with. Interestlingly, this project is best described by a lengthy Lorem Ipsum passage. Allow me to begin: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lorem sit amet nisi condimentum cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec cursus neque venenatis pellentesque congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras rutrum eros eu leo varius placerat. Vestibulum ac lacus nisl. Aliquam sit amet erat tincidunt, semper mi dignissim, laoreet lorem. Phasellus mattis leo in feugiat eleifend. Quisque scelerisque bibendum mi at egestas. Maecenas facilisis nisl pretium, sagittis leo vitae, feugiat tellus. Cras nisi urna, blandit eu congue sed, gravida ornare massa. Vivamus venenatis ut nunc ut malesuada. Proin tincidunt elementum sapien, in ornare ante commodo non. Nam eget quam a ipsum semper blandit eget nec leo. Nulla in tempus massa. Vivamus ut consectetur enim, laoreet faucibus ipsum. Nullam non justo nec elit aliquam viverra at id augue. Sed volutpat laoreet magna, nec mollis sem. Nunc vel tortor massa. Phasellus non dolor erat. Nulla a massa enim. Nullam bibendum sollicitudin elit eget rutrum. Pellentesque consectetur, turpis vel euismod porta, augue libero pulvinar ex, sit amet tempus massa enim dapibus quam. Vestibulum nec tortor quis libero ultricies efficitur a at est. Aenean sit amet cursus felis.",
    links: [
      {
        type: "github",
        text: "Github",
        to: "https://github.com"
      },
      {
        type: "codepen",
        text: "Codepen",
        to: "https://codepen.com"
      },
      {
        type: "demo",
        text: "Demo",
        to: "https://google.com"
      }
    ],
    tags: ["react", "javascript", "frontend"],
    img: undefined
  },
  {
    title: "My project 2",
    date: "November 2018",
    brief: "Here's the second project I ever made. I used a lot of neato thingies. Unfortunately the brief is longer than usual and might mess up some spacing and alignment. Oh no.",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: [
      {
        type: "github",
        text: "Github",
        to: "https://github.com"
      },
      {
        type: "demo",
        text: "Demo",
        to: "https://google.com"
      }
    ],
    tags: ["react", "javascript", "frontend"],
    img: undefined
  },
  {
    title: "My project 1",
    date: "October 2018",
    brief: "Here's the first project I ever made. It almost works!",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: [
      {
        type: "demo",
        text: "Demo",
        to: "https://google.com"
      }
    ],
    tags: ["react", "javascript", "frontend", "backend", "redux", "gatsby", "typescript", "reallylongtagthatmightbreaksomething"],
    image: undefined
  },
  {
    title: "My project 3",
    date: "December 2018",
    brief: "Here's the third project I ever made.",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: [
      {
        type: "github",
        text: "Github",
        to: "https://github.com"
      },
      {
        type: "blog",
        text: "Post",
        to: "blog"
      }
    ],
    tags: ["react", "javascript", "frontend"],
    img: undefined
  },
  {
    title: "My project 2",
    date: "November 2018",
    brief: "Here's the second project I ever made. I used a lot of neato thingies. Unfortunately the brief is longer than usual and might mess up some spacing and alignment. Oh no.",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    tags: ["react", "javascript", "frontend"],
    img: undefined
  },
  {
    title: "My project 1",
    date: "October 2018",
    brief: "Here's the first project I ever made. It almost works!",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: [
      {
        type: "github",
        text: "Github",
        to: "https://github.com"
      },
      {
        type: "codepen",
        text: "Codepen",
        to: "https://codepen.com"
      },
      {
        type: "demo",
        text: "Demo",
        to: "https://google.com"
      }
    ],
    tags: ["react", "javascript", "frontend", "backend", "redux", "gatsby", "typescript", "reallylongtagthatmightbreaksomething"],
    img: undefined
  }
]

const ProjectWrapper = styled(BlockWrapper)`
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1024px) {
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
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

    const allTags = Array.from(new Set((projectData.map(project => project.tags)).flat()))

    let children;
    if(this.state.displayProject !== null){
      children = <ProjectDetail project={this.state.displayProject} handleProjectClose={this.handleProjectClose} handleTagClick={this.handleTagClick}/>
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