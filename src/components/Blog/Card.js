import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import moment from 'moment'

const CardDate = styled.div`
    background-color: ${props => props.theme.colors.darkblue};
    box-sizing: border-box;
    color: white;
    padding: 1rem 2rem;
    text-align: right;
    text-shadow: 2px 2px 4px black;
    width: 100%;
`

const CardDescription = styled.div`
    box-sizing: border-box;
    color: white;
    height: 0;
    padding: 0 2rem;
    opacity: 0;
    text-shadow: 2px 2px 4px black;
    transition: opacity 0.15s ease-out, padding 0.15s ease-out;
`

const CardImage = styled(Img)`
    margin: 0;
    width: 100%;
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
    border-radius: 1rem;
    box-shadow: ${props => props.theme.smallShadow};
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    opacity: 0.9;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition: opacity 0.15s ease-out;
    width: 100%;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    &:hover {
        opacity: 1;
        .description {
            height: auto;
            opacity: 1;
            padding: 1rem 2rem;
        }
    }
`

const Card = (props) => {
    return <CardWrapper to={`/blog/${props.post.slug}`}>
        
            <CardDate>
                {moment(props.post.createdAt).fromNow()}
            </CardDate>
            <CardTitle>
                {props.post.title}
            </CardTitle>
            {props.post.featuredImage ? 
                <CardImage fluid={props.post.featuredImage.fluid}/> : null
            }
            <CardDescription className="description">
                {props.post.description.description}
            </CardDescription>
        
    </CardWrapper>
}

export default Card