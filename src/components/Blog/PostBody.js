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
        border-bottom: 2px solid ${props => props.theme.colors.lightblue};
        color: ${props => props.theme.colors.lightblue};
        padding-bottom: -2px;
        text-decoration: none;
        :active, :visited {
            border-bottom: 2px solid ${props => props.theme.colors.darkblue};
            color: ${props => props.theme.colors.darkblue};
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
        color: ${props => props.theme.colors.pink};
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