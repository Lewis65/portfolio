import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import About from '../components/About/About'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <About/>
  </Layout>
)

export default IndexPage