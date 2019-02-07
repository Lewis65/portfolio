import styled from 'styled-components'
import React from 'react'

const Body = styled.div`
    color: ${props => props.theme.colors.body};
    padding: 3rem;
    font-size: 125%;
    a {
        border-bottom: 2px solid ${props => props.theme.colors.active};
        color: ${props => props.theme.colors.active};
        padding-bottom: -2px;
        text-decoration: none;
        :active, :visited {
            color: ${props => props.theme.colors.activeShade};
        }
    }
`

const PostBody = (props) => {
    return <Body>{props.body || "No body text sent :("}</Body>
}

export default PostBody