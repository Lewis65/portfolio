import React from 'react'
import styled from 'styled-components'

import Tags from './Tags'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.shadow};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 90%;
  overflow-x: hidden;
  opacity: 0.85;
  padding: 0;
  transition: opacity 0.15s ease-out;
  user-select: none;
  width: 100%;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  &:hover {
    opacity: 1;
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

const Thumbnail = styled.div`
  background: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-height: 300px;
  min-height: 200px;
  width: 100%;
`

const Body = styled.div`
    flex-grow: 1;
    padding: 1rem;
`

const Card = (props) => {

  return <Wrapper>

    <Title onClick={props.handleCardClick}>
      {props.title}
    </Title>

    {props.thumbnail && <Thumbnail src={props.thumbnail} onClick={props.handleCardClick} />}

    <Body>
      {props.body}
    </Body>

    <Tags tags={props.tags.sort()} tagType={props.tagType} />

  </Wrapper>
}

export default Card