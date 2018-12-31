import styled from 'styled-components'
import React from 'react'

import BlockWrapper from '../shared/BlockWrapper'
import ProjectCard from './ProjectCard';

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
    tags: ["react", "javascript", "front-end"]
  },
  {
    title: "My project 2",
    date: "November 2018",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: {
      code: "https://github.com",
      demo: "https://codepen.com"
    },
    tags: ["react", "javascript", "front-end"]
  },
  {
    title: "My project 1",
    date: "October 2018",
    description: "Here's a project I made up just now so that I have some dummy data to make the site with.",
    links: {
      code: "https://github.com",
      demo: "https://codepen.com"
    },
    tags: ["react", "javascript", "front-end"]
  }
]

const ProjectWrapper = styled(BlockWrapper)`
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

const Projects = () => {
  const items = projectData.map(project => 
    <ProjectCard project={project}/>
  )
  return (
    <ProjectWrapper>
      {items}
    </ProjectWrapper>
  )
}

export default Projects