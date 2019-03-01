import styled from 'styled-components'
import React from 'react'

const Body = styled.div`
    color: ${props => props.theme.colors.body};
    padding: 0.5rem;
    @media screen and (min-width: 1024px){
        font-size: 1.2em;
        padding: 3rem;
    }
    a {
        border-bottom: 2px solid ${props => props.theme.colors.active};
        color: ${props => props.theme.colors.active};
        padding-bottom: -2px;
        text-decoration: none;
        :active, :visited {
            border-bottom: 2px solid ${props => props.theme.colors.activeShade};
            color: ${props => props.theme.colors.activeShade};
        }
    }
    h1, h2, h3 {
        margin: 2rem auto 1rem auto;
        &:first-child {
            margin-top: 1rem;
        }
        @media screen and (min-width: 1024px){
            margin: 4rem auto 2rem auto;
            &:first-child {
                margin-top: 2rem;
            }
        }
    }
    h1 {
        color: ${props => props.theme.colors.active};
        font-weight: bold;
    }
    p {
        line-height: 2;
    }
`

const PostBody = (props) => {
    const markup = {
        __html: props.body
    }
    return <Body dangerouslySetInnerHTML={markup}></Body>
}

export default PostBody