import styled from 'styled-components'
import React from 'react'

import Tags from '../shared/Tags'

const Info = styled.div`
    color: ${props => props.theme.colors.body};
    padding: 1rem 0.5rem;
    @media screen and (min-width: 1024px){
        font-size: 125%;
        padding: 1rem 3rem;
    }
`

const PostInfo = (props) => {
    return <Info
        createdAt={props.createdAt}
        updatedAt={props.updatedAt}
        >
            <Tags tags={props.tags} tagType="blog"/>
        </Info>
}

export default PostInfo