import styled from 'styled-components'
import React from 'react'

const Body = styled.div`
    color: ${props => props.theme.colors.body};
    font-size: 120%;
    padding: 0.5rem;
    @media screen and (min-width: 1024px){
        font-size: 150%;
        padding: 3rem;
    }
`

const PostBody = (props) => {
    return <Body>{props.body || "No body text sent :("}</Body>
}

export default PostBody