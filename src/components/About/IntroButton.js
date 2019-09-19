import React from 'react'
import styled from 'styled-components'

const ExternalIconLink = styled.a`
    background-color: ${props => props.theme.colors.lightblue};
    display: inline-flex;
    text-decoration: none;
    transition: background-color 0.15s ease-out;
    &:hover {
        background-color: ${props => props.theme.colors.pink};
    }
    div {
        padding: 0.75rem;
    }
`

const Icon = styled.div`
    color: white;
    flex-grow: 0;
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 0;
    height: 1.5rem;
    width: 1.5rem;
`

const Label = styled.div`
    background-color: white;
    color: ${props => props.theme.colors.body};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
`

const IconButton = (props) => {
    return <ExternalIconLink href={props.href}>
        <Icon>
            <i className={props.icon}/>
        </Icon>
        <Label>
            {props.label}
        </Label>
    </ExternalIconLink>
}

export default IconButton