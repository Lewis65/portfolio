import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  input, textarea {
    background-color: white;
    border: 2px solid ${props => props.theme.colors.highlight};
    border-radius: 1rem;
    color: ${props => props.theme.colors.body};
    font-family: ${props => props.theme.fonts.body};
    font-size: 100%;
    margin-bottom: 1rem;
    outline: none;
    padding: 1rem;
    resize: none;
  }
`

//Implement simple plaintext Nodemailer form
const ContactForm = () => {
  return <React.Fragment>
    <Form>
      <label>Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="text"></input>
      <label>Message</label>
      <textarea rows="5"></textarea>
      <Button>Send</Button>
    </Form>
  </React.Fragment>
}

export default ContactForm