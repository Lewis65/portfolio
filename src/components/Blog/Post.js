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
        <Header title={props.data.title}/>
        <Body body={props.data.body}/>
    </Wrapper>
}

export default Post