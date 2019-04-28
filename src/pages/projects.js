import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Heading from '../components/shared/Heading'
import Projects from '../components/Projects/Projects';

const PortfolioPage = (props) => {

  let projectsToDisplay = []
  props.data.allContentfulProject.edges.forEach(edge => {
    projectsToDisplay.push(edge.node)
  })

  return(
  <Layout>
    <SEO title="Projects" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Main>
      <Heading>Projects</Heading>
      <Projects projects={projectsToDisplay}/>
    </Main>
  </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  {
    allContentfulProject {
      edges {
        node {
          title
          date
          tags
          brief {
            brief
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          posts {
            slug
            title
            description {
              childMarkdownRemark {
                html
              }
            }
          }
          codepen
          github
          demo
        }
      }
    }
  }
`