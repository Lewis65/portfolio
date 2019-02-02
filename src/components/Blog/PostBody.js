import styled from 'styled-components'
import React from 'react'

const Body = styled.div`
    color: ${props => props.theme.colors.body};
    padding: 3rem;
`

const PostBody = (props) => {
    return <Body>{props.body || "No body text sent :("}</Body>
}

export default PostBody