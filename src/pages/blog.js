import React from 'react'
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Heading from '../components/shared/Heading'
import List from '../components/Blog/List'

const BlogPage = (props) => {

  let postsToDisplay = []
  props.data.allContentfulBlogPost.edges.forEach(edge => {
    postsToDisplay.push(edge.node)
  })

  return <Layout>
    <SEO title="Blog" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Main>
      <Heading>Blog</Heading>
      <List posts={postsToDisplay}/>
    </Main>
  </Layout>
}

export default BlogPage

export const pageQuery = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          featuredImage {
            fluid {
              src
            }
          }
          description {
            description
          }
          createdAt
        }
      }
    }
  }
`