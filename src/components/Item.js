import React from 'react'

function Item({item}) {
    return (
        <div className = "item">
			<img className="img" src={item.url} alt={item.name} />
		</div>
    )
}

export default Item
