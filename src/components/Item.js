import React from 'react'
  
import { Link } from "react-router-dom";

function Item({item, movie, notFromHome}) {
    const linkUrl = `/${movie ? "movies" : "tvshows"}/${item.id}/`;
    return (
        // <div className = "item" onClick={clicked}>
		// 	<img className="img" src={item.url} alt={item.name} /> <br/>
        //     {notFromHome && item.name}
		// </div>

        <div className = "item" >
            <Link to={linkUrl} style={{textDecoration:"none", color:'black'}}>
			    <img className="img" src={item.url} alt={item.name} /> <br/>
                {notFromHome && item.name}
            </Link>
		</div>
    )
}

export default Item
