import styled from 'styled-components'
import React from 'react'

import Heading from '../shared/Heading'

const Header = styled.div`
    background: ${props => props.theme.colors.highlight} url(${props => props.featuredImage}) no-repeat center center;
    background-size: cover;
    color: white;
    padding: 3rem;
`

const PostHeader = (props) => {
    return <Header>
        <Heading hero>{props.title || "Untitled post"}</Heading>
    </Header>
}

export default PostHeader