import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby';

const CardDescription = styled.div`
    color: #FFF;
`

const CardInfo = styled.div`
    color: ${props => props.theme.colors.body};
    display: flex;
    flex-direction: column;
`

const CardTitle = styled.h2`
    color: ${props => props.theme.colors.active};
    text-shadow: 2px 2px 0 ${props => props.theme.colors.shadow};
`

const CardWrapper = styled(Link)`
    background-color: ${props => props.theme.colors.highlight};
    background-image: ${props => props.featuredImage ? `url(${props.featuredImage.fluid.src})` : "none"};
    background-size: cover;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 1rem 0;
    padding: 2rem;
    text-decoration: none;
    width: 100%;
    @media screen and (min-width: 1024px){
        margin: 1rem;
        min-width: 200px;
        width: auto;
    }
`

const Card = (props) => {
    console.log(props.post)
    return <CardWrapper to={`/blog/${props.post.slug}`} featuredImage={props.post.featuredImage}>
        <CardInfo>
            <CardTitle>
                {props.post.title}
            </CardTitle>
            <CardDescription>
                {props.post.description.description}
            </CardDescription>
        </CardInfo>
    </CardWrapper>
}

export default Card