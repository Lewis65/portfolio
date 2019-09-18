import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'
import sendEmail from '../../sendEmail'

const Field = styled.div`
  background-color: white;
  border: 0.125rem solid ${props => props.theme.colors.lightblue};
  margin: 0.5rem 0 1.5rem;
  &:focus-within {
    border-color: ${props => props.theme.colors.pink};
  }
  input, textarea {
    border: 0;
    box-sizing: border-box;
    color: ${props => props.theme.colors.body};
    font-family: ${props => props.theme.fonts.body};
    font-size: 100%;
    outline: none;
    padding: 1rem;
    resize: none;
    width: 100%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
`

const Send = styled(Button)`
  transition: background-color 0.15s ease-out;
  &:hover {
    background-color: ${props => props.theme.colors.pink}
  }
`

class ContactForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      body: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e){
    const body = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.body
    }
    sendEmail(e, body)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      if(data.body && data.body.success){
        alert(`Thanks for your message, ${data.body.name}. I'll get back to you as soon as possible!`)
      } else {
        alert("Sorry, something went wrong. Please contact me via Github or Linkedin!")
      }
    })
  }

  render(){
    return <Form>
      <label>Name</label>
      <Field><input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input></Field>
      <label>Email</label>
      <Field><input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input></Field>
      <label>Message</label>
      <Field><textarea rows="8" name="body" value={this.state.body} onChange={this.handleChange}></textarea></Field>
      <Send onClick={(e) => this.handleSubmit(e)}>Send</Send>
    </Form>
    
  }
}

export default ContactForm