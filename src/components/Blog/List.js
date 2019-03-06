import styled from 'styled-components'
import React from 'react'

import Card from './Card'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const List = (props) => {

    let cards = props.posts.map((post, index) => {
        return <Card post={post.node} key={index}></Card>
    })

    return <Wrapper>
        {cards}
    </Wrapper>
}

export default List