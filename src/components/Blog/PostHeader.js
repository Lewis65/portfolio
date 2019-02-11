import styled from 'styled-components'
import React from 'react'

import Heading from '../shared/Heading'

const Header = styled.div`
    background: ${props => props.theme.colors.highlight} url(${props => props.featuredImage}) no-repeat center center;
    background-size: cover;
    color: white;
    padding: 2rem 1rem;
    @media screen and (min-width: 1024px) {
        padding: 3rem 4rem;
    }
`

const PostHeader = (props) => {
    return <Header>
        <Heading blog>{props.title || "Untitled post"}</Heading>
    </Header>
}

export default PostHeader