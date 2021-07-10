import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import Header from './Header'
import { Modal, Button } from 'react-bootstrap'
import TVShowDetails from './TVShowDetails'

const TVShowsPage = () => {
    const [tvshows, settvshows] = useState([]);
    

    useEffect(() => {
        const fetchTVShows = async () =>{
            //const data = await fetch("http://localhost:3000/tvShows");
            const data = await fetch("http://localhost:4000/api/tvShows");
            const parsed = await data.json();
            settvshows(prev => parsed);
            
        }
        fetchTVShows();
    }, []);

    

    return (
        <>
            <Header title={"All TV Shows"} />
            
            <div className="container-grid">
                {tvshows.map((item)=>(
                    <Item key={item.id} movie={false} item={item} notFromHome={true}/>
                ))}
            </div>
        </>
    )
}

export default TVShowsPage
