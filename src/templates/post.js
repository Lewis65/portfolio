import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Post from '../components/Blog/Post'

let postData = {
  title: "Error",
  bodyText: {
    childMarkdownRemark: {
      html: "Oops. Something's gone wrong. Sorry about that."
    }
  },
  featuredImage: undefined,
  tags: ["oopsie"]
}

const BlogPage = (props) => {
  if (props.pageContext.id){
    postData = props.pageContext
  }
  return (<Layout>
    <SEO title={`${postData.title} - Lewis Horwood`} keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend'].concat(postData.tags)} />
    <Main>
      <Post data={postData}></Post>
    </Main>
  </Layout>)
}

export default BlogPage