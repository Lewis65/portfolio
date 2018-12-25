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

const ContactPage = () => (
  <Layout>
    <SEO title="Contact me" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Content>
      <Heading>Contact me</Heading>
      
    </Content>
  </Layout>
)

export default ContactPage