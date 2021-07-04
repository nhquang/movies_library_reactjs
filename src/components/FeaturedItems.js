import React from 'react'
import Item from './Item'

const FeaturedItems = ({title, items}) => {
    return (
        <div className="featured">
            <h2>{title}</h2>
            {items.map((item)=>(
                <Item key={item.url} item = {item} notFromHome={false}/>
            ))}
        </div>
    )
}

export default FeaturedItems
