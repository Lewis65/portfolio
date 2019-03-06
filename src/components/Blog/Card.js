import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby';

const CardInfo = styled.div`
    color: ${props => props.theme.colors.body};
    display: flex;
    flex-direction: column;
`

const CardTitle = styled.h2`
    color: ${props => props.theme.colors.active};
`

const CardWrapper = styled.div`
    background-color: #FFF;
    background-image: ${props => props.featuredImage ? `url(${props.featuredImage.fluid.src})` : "none"};
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 1rem;
    padding: 2rem;
`

const Card = (props) => {
    console.log(props.post)
    return <CardWrapper featuredImage={props.post.featuredImage}>
        <CardInfo>
            <CardTitle>
                <Link to={`/blog/${props.post.slug}`}>{props.post.title}</Link>
            </CardTitle>
            {props.post.description.description}
        </CardInfo>
    </CardWrapper>
}

export default Card