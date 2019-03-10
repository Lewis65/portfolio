import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby';

const CardDescription = styled.div`
    color: white;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const CardTitle = styled.h2`
    color: ${props => props.theme.colors.lightblue};
    margin: 0 auto 1rem 0;
    text-shadow: 2px 2px 0 ${props => props.theme.colors.shadow};
    transition: color 0.15s ease-out;
`

const CardWrapper = styled(Link)`
    background-color: ${props => props.theme.colors.darkblue};
    background-image: ${props => props.featuredImage ? `url(${props.featuredImage.fluid.src})` : "none"};
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
    box-shadow: ${props => props.theme.smallShadow};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 2rem;
    text-decoration: none;
    width: 100%;
    @media screen and (min-width: 1024px){
        &:hover {
            h2 {
                color: ${props => props.theme.colors.pink};
            }
        }
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