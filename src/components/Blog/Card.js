import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

import Tags from '../shared/Tags'

const CardDate = styled.div`
    box-sizing: border-box;
    color: ${props => props.theme.colors.pink};
    text-align: right;
    width: 100%;
`

const CardDescription = styled.div`
    color: ${props => props.theme.colors.body};
    transition: opacity 0.15s ease-out, padding 0.15s ease-out;
`

const CardInfo = styled.div`
    margin-top: 0.5rem;
    padding: 0 1rem;
    div {
        margin: 0.5rem 0;
    }
`

const CardTitle = styled(Link)`
    background-image: linear-gradient(130deg, ${props => props.theme.colors.darkblue}, ${props => props.theme.colors.pink});
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    margin: 0;
    padding: 1rem;
    text-decoration: none;
    text-shadow: 3px 3px 6px ${props => props.theme.colors.shadow};
    transition: color 0.15s ease-out, text-shadow 0.15s ease-out;
    width: 100%;
    h3 {
        margin: 0;
        padding: 0;
    }
    &:hover {
        h3 {
            text-shadow: 3px 3px 6px ${props => props.theme.colors.pink};
        }
    }
`

const CardWrapper = styled.div`
    background-color: white;
    border-radius: 1rem;
    box-shadow: ${props => props.theme.smallShadow};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    opacity: 0.9;
    overflow: hidden;
    position: relative;
    transition: opacity 0.15s ease-out;
    width: 100%;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    &:hover {
        opacity: 1;
    }
`

const Card = (props) => {
    return <CardWrapper>

        <CardTitle to={`/blog/${props.post.slug}`}>
            <h3>{props.post.title}</h3>
        </CardTitle>

        <CardInfo>
                <CardDate>
                    {moment(props.post.createdAt).fromNow()}
                </CardDate>
                <CardDescription className="description">
                    {props.post.description.description}
                </CardDescription>
                <Tags tags={props.post.tags.sort()} tagType="blogCard"/>
        </CardInfo>

    </CardWrapper>
}

export default Card