import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import Header from './Header'


const MoviesPage = () => {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () =>{
            const data = await fetch("http://localhost:3000/movies");
            const parsed = await data.json();
            setMovies(prev => parsed);
            
        }
        fetchMovies();
    }, []);

    
    return (
        <>
            <Header title={"All Movies"} />
            
            <div className="container-grid">
                {movies.map((item)=>(
                    <Item key={item.url} item={item} />
                ))}
            </div>
        </>
    )
}

export default MoviesPage
