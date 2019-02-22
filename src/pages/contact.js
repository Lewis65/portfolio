import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/shared/MainPage'
import Heading from '../components/shared/Heading'
import ContactForm from '../components/Contact/ContactForm'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact me" keywords={['Lewis Horwood', 'web developer', 'react', 'Seoul', 'Calgary', 'javascript developer', 'programmer', 'software engineer', 'frontend']} />
    <Main>
      <Heading>Contact me</Heading>
      <ContactForm/>
    </Main>
  </Layout>
)

export default ContactPage