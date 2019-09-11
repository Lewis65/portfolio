import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Heading from '../components/shared/Heading'
import List from '../components/Blog/PostList'
import { Link } from 'gatsby'

const SeeAllLink = styled(Link)`
  color: ${props => props.theme.colors.pink};
  margin-bottom: 1rem;
  text-decoration: none;
`

const BlogPage = (props) => {
  return (<Layout>
    <SEO title={`Posts tagged - Lewis Horwood`} keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend'].concat(props.pageContext.tag)} />
    <Main>
      <Heading>Posts tagged '{props.pageContext.tag}'</Heading>
      <SeeAllLink to='/blog'>See all posts</SeeAllLink>
      <List posts={props.pageContext.posts}></List>
    </Main>
  </Layout>)
}

export default BlogPage