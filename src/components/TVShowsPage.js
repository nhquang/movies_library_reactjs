import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import Header from './Header'

const TVShowsPage = () => {
    const [tvshows, settvshows] = useState([]);
    useEffect(() => {
        const fetchTVShows = async () =>{
            const data = await fetch("http://localhost:3000/tvShows");
            const parsed = await data.json();
            settvshows(prev => parsed);
            
        }
        fetchTVShows();
    }, [])
    return (
        <>
            <Header title={"All TV Shows"} />
            
            <div className="listing">
                {tvshows.map((item)=>(
                    <Item key={item.url} item={item} />
                ))}
            </div>
        </>
    )
}

export default TVShowsPage
