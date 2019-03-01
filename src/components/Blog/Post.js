import styled from 'styled-components'
import React from 'react'

import Header from './PostHeader'
import Info from './PostInfo'
import Body from './PostBody'

const Wrapper = styled.div`
    background: white;
`

const Post = (props) => {
    return <Wrapper>
        <Header
            title={props.data.title}
            featuredImage={props.data.featuredImage}
        />
        <Info
            createdAt={props.data.createdAt}
            updatedAt={props.data.updatedAt}
            test={props.data}
            tags={props.data.tags}
        />
        <Body
            body={props.data.bodyText.childMarkdownRemark.html}
        />
    </Wrapper>
}

export default Post