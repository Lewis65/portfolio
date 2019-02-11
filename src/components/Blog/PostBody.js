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