import React from 'react'

import Card from './Card'
import CardTable from '../shared/CardTable'

const List = (props) => {

    let cards = props.posts.map((post, index) => {
        return <Card post={post} key={index}></Card>
    })

    return <CardTable>
        {cards}
    </CardTable>
}

export default List