import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Heading from '../components/shared/Heading'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Main>
      <Heading>Not found</Heading>
      <p>
        This is not the route you're looking for.
      </p>
      <Link to='/'>Back</Link>
    </Main>
  </Layout>
)

export default NotFoundPage
