import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import moment from 'moment'

const CardDate = styled.div`
    box-sizing: border-box;
    color: ${props => props.theme.colors.pink};
    padding: 1rem 2rem 0;
    text-align: right;
    width: 100%;
`

const CardDescription = styled.div`
    box-sizing: border-box;
    padding: 1rem 2rem;
    transition: opacity 0.15s ease-out, padding 0.15s ease-out;
`

const CardImage = styled(Img)`
    margin: 0;
    width: 100%;
    z-index: 1;
`

const CardInfo = styled.div`
    position: relative;
`

const CardMeta = styled.div`
    &.img {
        position: absolute;
        text-shadow: 1px 1px 2px black;
        top: 0;
        z-index: 2;
        .description {
            color: white;
        }
    }
    &.noimg {
        .description {
            color: ${props => props.theme.colors.body};
        }
    }
`

const CardTitle = styled.h2`
    background-image: linear-gradient(130deg, ${props => props.theme.colors.darkblue}, ${props => props.theme.colors.pink});
    box-sizing: border-box;
    color: white;
    margin: 0;
    padding: 1rem 1rem 0.5rem;
    text-shadow: 3px 3px 6px ${props => props.theme.colors.shadow};
    transition: color 0.15s ease-out, text-shadow 0.15s ease-out;
    width: 100%;
`

const CardWrapper = styled(Link)`
    background-color: white;
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
        h2 {
            text-shadow: 3px 3px 6px ${props => props.theme.colors.pink};
        }
    }
`

const Card = (props) => {
    return <CardWrapper to={`/blog/${props.post.slug}`}>
            <CardTitle>
                {props.post.title}
            </CardTitle>
            <CardInfo>
                {
                    props.post.featuredImage ? 
                    <CardImage fluid={props.post.featuredImage.fluid}/> : 
                    null
                }
                <CardMeta className={props.post.featuredImage ? "img" : "noimg"}>
                    <CardDate>
                        {moment(props.post.createdAt).fromNow()}
                    </CardDate>
                    <CardDescription className="description">
                        {props.post.description.description}
                    </CardDescription>
                </CardMeta>
            </CardInfo>
        
    </CardWrapper>
}

export default Card