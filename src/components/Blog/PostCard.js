import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'

import Card from '../shared/Card'
import Tags from '../shared/Tags'

const CardDate = styled.div`
    box-sizing: border-box;
    color: ${props => props.theme.colors.pink};
    text-align: right;
    width: 100%;
`

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;
    * {
        width: auto;
    }
`

const ReadMoreLink = styled(Link)`
    color: ${props => props.theme.colors.lightblue};
    text-decoration: none;
`

const TitleLink = styled(Link)`
    color: white;
    text-decoration: none;
`

const BlogCard = (props) => {
    const title = <TitleLink to={`/blog/${props.post.slug}`}>{props.post.title}</TitleLink>
    return <Card
        title={title}
    >
        <p>{props.post.description.description}</p>
        <CardInfo>
            <CardDate>
                {moment(props.post.createdAt).format("MMM 'YY")}
            </CardDate>
            <ReadMoreLink to={`/blog/${props.post.slug}`}>Read more...</ReadMoreLink>
        </CardInfo>
        <Tags tags={props.post.tags ? props.post.tags.sort() : null}/>
    </Card>
}

export default BlogCard