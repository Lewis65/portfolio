import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Heading from '../components/shared/Heading'
import Projects from '../components/Portfolio/Projects';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Main>
      <Heading>Portfolio</Heading>
      <Projects/>
    </Main>
  </Layout>
)

export default PortfolioPage