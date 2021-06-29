import React from 'react'
import FeaturedItem from './FeaturedItem'

const FeaturedItems = ({title, items}) => {
    return (
        <div className="featured">
            <h2 style={{cursor:"pointer"}}>{title}</h2>
            {items.map((item)=>(
                <FeaturedItem key={item.url} item = {item}/>
            ))}
        </div>
    )
}

export default FeaturedItems
