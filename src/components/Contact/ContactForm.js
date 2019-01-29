import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'

const Field = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.colors.highlight};
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  input, textarea {
    border: 0;
    box-sizing: border-box;
    color: ${props => props.theme.colors.body};
    font-family: ${props => props.theme.fonts.body};
    font-size: 100%;
    outline: none;
    padding: 0.5rem;
    resize: none;
    width: 100%;
  }
  textarea::-webkit-scrollbar{
    width: 10px;
  }
  textarea::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.highlight};
    border-radius: 5px;
  }
  textarea::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`

const ContactForm = () => {
  return <React.Fragment>
    <Form netlify>
      <label>Name</label>
      <Field><input type="text"></input></Field>
      <label>Email</label>
      <Field><input type="text"></input></Field>
      <label>Message</label>
      <Field><textarea rows="8"></textarea></Field>
      <Button>Send</Button>
    </Form>
  </React.Fragment>
}

export default ContactForm