import styled from 'styled-components'
import React from 'react'

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
        createdAt={props.data.createdAt}
        updatedAt={props.data.updatedAt}
        />
}

export default PostInfo