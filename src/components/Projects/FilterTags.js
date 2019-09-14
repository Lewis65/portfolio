import styled from 'styled-components'
import React from 'react'

import Tag from '../shared/Tag'

const Close = styled.i`
    align-self: center;
    color: white;
    font-size: 1rem;
    margin-left: 0.33rem;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem -0.25rem 1.75rem -0.25rem;
  overflow: hidden;
  width: auto;
  .activeFilter {
        background-color: ${props => props.theme.colors.pink};
    }
  a {
    font-size: 1rem;
    border-radius: 0.67rem;
    padding: 0.33rem;
  }
`

const Tags = (props) => {

    let tags = props.tags.map((tag, key) => {
        return <Tag 
        key={key}
        tag={tag}
        handleTagClick={props.handleTagClick}
        clickable={"true"}
        />
    })

    if(props.tagToFilterBy) {
        tags.splice(props.tags.indexOf(props.tagToFilterBy), 1)
        tags.unshift(
        <Tag 
        className="activeFilter" 
        key={"0"} tag={props.tagToFilterBy} 
        handleTagClick={() => props.handleTagClick(null)}
        clickable="true"
        >
            {`#${props.tagToFilterBy}`}
            <Close className="fa fa-times-circle"/>
        </Tag>)
    }

    return(
        <TagContainer>
        {tags}
        </TagContainer>
    )
}

export default Tags