import styled from 'styled-components'
import React from 'react'
import moment from 'moment'

import Tags from '../shared/Tags'

const Info = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.body};
    padding: 1rem 0;
    margin: 0 1rem;
    @media screen and (min-width: 1024px){
        font-size: 125%;
        margin: 0 3rem;
    }
`

const InfoBlock = styled.div`
    color: ${props => props.theme.colors.secondary};
    display: flex;
`

const InfoItem = styled.div`
    display: inline-block;
    margin: 0.5rem;
`

const PostInfo = (props) => {
    console.log('PostInfo props', props)
    let timestamps = [<InfoItem key="1">Posted {moment(props.createdAt).format("MMMM Do YYYY")}</InfoItem>]
    if(props.updatedAt){
        timestamps.push(<InfoItem key="2">Updated {moment(props.updatedAt).fromNow()}</InfoItem>)
    }
    return <Info>
        <InfoBlock>
            {timestamps}
        </InfoBlock>
        {props.tags ? <Tags tags={props.tags} tagType="blog"/> : null}
    </Info>
}

export default PostInfo