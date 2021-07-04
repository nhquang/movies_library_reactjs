import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import Header from './Header'
import { Modal, Button} from 'react-bootstrap'
import MovieDetails from './MovieDetails'

const MoviesPage = () => {
    
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState({});
    
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
                    <Item key={item.id} movie={true} item={item} notFromHome={true}/>
                ))}
            </div>
        </>
    )
}

export default MoviesPage
