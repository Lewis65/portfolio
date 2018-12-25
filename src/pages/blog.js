import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Heading from '../components/shared/Heading'

const Content = styled.div`
  align-content: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  position: absolute;
  z-index: 10;
  @media screen and (min-width: 1024px) {
    margin-top: 4rem;
  }
`

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Content>
      <Heading>Blog</Heading>
      
    </Content>
  </Layout>
)

export default BlogPage