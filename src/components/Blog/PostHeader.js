import styled from 'styled-components'
import React from 'react'

import Heading from '../shared/Heading'

const Header = styled.div`
    background-image: ${props => props.featuredImage ? `url(${props.featuredImage.fluid.src})` : `linear-gradient(130deg, ${props.theme.colors.darkblue}, ${props.theme.colors.pink})`};
    background-size: cover;
    color: white;
    padding: 2rem 1rem;
    @media screen and (min-width: 1024px) {
        padding: 3rem 4rem;
    }
`

const PostHeader = (props) => {
    return <Header featuredImage={props.featuredImage}>
        <Heading blog>{props.title || "Untitled post"}</Heading>
    </Header>
}

export default PostHeader