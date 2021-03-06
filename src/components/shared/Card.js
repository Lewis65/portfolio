import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadow};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 90%;
  overflow-x: hidden;
  opacity: 0.85;
  padding: 0;
  transition: opacity 0.15s ease-out;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  &:hover {
    opacity: 1;
    .clickable {
      cursor: pointer;
    }
  }
`

const Title = styled.h2`
  background-color: ${props => props.theme.colors.pink};
  color: white;
  display: block;
  margin: 0;
  padding: 1rem;
  text-shadow: 3px 3px 6px ${props => props.theme.colors.shadow};
`

const Body = styled.div`
    flex: 1 1 0;
    padding: 1rem;
`

const Card = (props) => {

  return <Wrapper>

    <Title className={`${props.handleCardClick ? 'clickable' : ''}`} onClick={props.handleCardClick ? props.handleCardClick : null}>
      {props.title}
    </Title>

    <Body>
      {props.children}
    </Body>

  </Wrapper>
}

export default Card