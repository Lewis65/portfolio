import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby';
import moment from 'moment'

const CardDate = styled.div`
    color: white;
    margin: 1rem 2rem 0.5rem;
    text-align: right;
    text-shadow: 2px 2px 4px black;
`

const CardDescription = styled.div`
    color: white;
    margin: 0.5rem 2rem 1rem;
    text-shadow: 2px 2px 4px black;
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const CardTitle = styled.h2`
    background-color: ${props => props.theme.colors.pink};
    box-sizing: border-box;
    color: white;
    margin: 0;
    padding: 0.5rem 2rem;
    text-shadow: 3px 3px 4px ${props => props.theme.colors.shadow};
    transition: color 0.15s ease-out;
    width: 100%;
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
    text-decoration: none;
    width: 100%;
    @media screen and (min-width: 1024px){
        &:hover {
            h2 {
                background-color: ${props => props.theme.colors.red};
            }
        }
    }
`

const Card = (props) => {
    console.log(props.post)
    return <CardWrapper to={`/blog/${props.post.slug}`} featuredImage={props.post.featuredImage}>
        <CardInfo>
        <CardDate>
                {moment(props.post.createdAt).fromNow()}
            </CardDate>
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