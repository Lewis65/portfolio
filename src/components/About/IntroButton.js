import React from 'react'
import styled from 'styled-components'

import ButtonLink from '../shared/ButtonLink'

const IconButton = styled(ButtonLink)`
    display: flex;
    border: 3px solid ${props => props.theme.colors.lightblue};
    &:hover {
        border-color: ${props => props.theme.colors.pink};
    }
    div {
        padding: 0.5rem;
    }
`

const Icon = styled.div`
    background-color: ${props => props.theme.colors.lightblue};
    color: white;
`

const Label = styled.div`
    background-color: white;
    color: ${props => props.theme.colors.body};
`

export default Button = (props) => {
    <IconButton to={props.to}>
        <Icon>
            <i className={props.icon}/>
        </Icon>
        <Label>
            {props.label}
        </Label>
    </IconButton>
}