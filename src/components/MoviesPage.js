import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import Header from './Header'
import { Modal, Button} from 'react-bootstrap'
import MovieDetails from './MovieDetails'

const MoviesPage = ({movies}) => {
    // const [movies, setMovies] = useState([]);
    
    // useEffect(() => {
    //     const fetchMovies = async () =>{
    //         //const data = await fetch("http://localhost:3000/movies");
    //         //const data = await fetch("http://localhost:4000/api/movies");
    //         const data = await fetch("https://movies-night-nhquang.herokuapp.com/api/movies");
	// 		const parsed = await data.json();
    //         setMovies(prev => parsed);
    //     }
    //     fetchMovies();
    // }, []);

    
    
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
