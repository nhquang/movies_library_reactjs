import React from 'react'
  
import { Link } from "react-router-dom";

function Item({item, notFromHome}) {
    const linkUrl = `/${item.movie ? "movies" : "tvshows"}/${item.id}/`;
    return (
        // <div className = "item" onClick={clicked}>
		// 	<img className="img" src={item.url} alt={item.name} /> <br/>
        //     {notFromHome && item.name}
		// </div>

        <div className = "item" >
            <Link to={linkUrl} style={{textDecoration:"none", color:'black'}}>
			    <img className="img" src={item.url} alt={item.name} /> <br/>
                {/* {notFromHome && <div style={{width:"100%"}}>{item.name}</div>} */}
            </Link>
		</div>
    )
}

export default Item
