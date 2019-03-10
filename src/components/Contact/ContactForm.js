import React from 'react'
import styled from 'styled-components'

import Button from '../shared/Button'

const Field = styled.div`
  background-color: white;
  border: 2px solid ${props => props.theme.colors.darkblue};
  border-radius: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  &:focus-within {
    border-color: ${props => props.theme.colors.lightblue};
  }
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
    console.log(e.target)
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e){
    e.preventDefault()
    const message = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    }
    console.log(message)
  }

  render(){
    return <Form>
      <label>Name</label>
      <Field><input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input></Field>
      <label>Email</label>
      <Field><input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input></Field>
      <label>Message</label>
      <Field><textarea rows="8" name="body" value={this.state.body} onChange={this.handleChange}></textarea></Field>
      <Button>Send</Button>
    </Form>
    
  }
}

export default ContactForm