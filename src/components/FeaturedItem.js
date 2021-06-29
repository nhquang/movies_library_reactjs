import React from 'react'

function FeaturedItem({item}) {
    return (
        <div className = "item">
			<img className="img" src={item.url} />
		</div>
    )
}

export default FeaturedItem
