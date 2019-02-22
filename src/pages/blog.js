import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Heading from '../components/shared/Heading'
import { graphql } from 'gatsby';

const BlogPage = (props) => {
  return <Layout>
    <SEO title="Blog" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Main>
      <Heading>Blog</Heading>
      
    </Main>
  </Layout>
}

export default BlogPage

export const pageQuery = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          
          description {
            description
          }
          bodyText {
            bodyText
          }
        }
      }
    }
  }
`