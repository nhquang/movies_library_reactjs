import React from 'react'

function Item({item, handleShow}) {
    const clicked = ()=>{
        handleShow(item);
    };
    return (
        <div className = "item" onClick={clicked}>
			<img className="img" src={item.url} alt={item.name} />
		</div>
    )
}

export default Item
