import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Post from '../components/Blog/Post'

const postData = {
  title: "Here's a blog post",
  body: "Hoo boy a blog post",
  featuredImage: undefined,
  tags: ["test", "post", "sweet"]
}

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend'].concat(postData.tags)} />
    <Main>
      <Post data={postData}></Post>
    </Main>
  </Layout>
)

export default BlogPage