import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({name:"", url:"", overview:"", genres:[], releaseDate:"", length:"", trailer:"", poster:"" });
    useEffect(() => {
        const fetchMovie = async () =>{
            //const data = await fetch(`http://localhost:3000/movies/${id}`);
            //const data = await fetch(`http://localhost:4000/api/movies/${id}`);
            const data = await fetch(`https://movies-night-nhquang.herokuapp.com/api/movies/${id}`);
			const parsed = await data.json();
            console.log(parsed);
            setMovie(prev => parsed);
        };
        fetchMovie();
    }, [])
    return (

        <div className="details">
            <img src={movie.poster} className="img" style={{borderRadius:"15px", width:"85%", margin:"auto", display:"block"}}/>
            <div style={{margin:"auto", marginTop:"20px", width:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className="price">Rent $5.99</div>
                <div className="price" style={{marginLeft:"1%"}}>Buy $14.99</div>
            </div>
            <div className="content">
                <h1 style={{textAlign:"center"}}>{movie.name}</h1>
                <div className="content-text">
                    Overview: <span style={{fontWeight:"normal"}}>{movie.overview}</span> <br/>
                    Genres: <span style={{fontWeight:"normal"}}>{movie.genres.join(', ')}</span> <br/>
                    Release Date: <span style={{fontWeight:"normal"}}>{movie.releaseDate}</span> <br/>
                    Length: <span style={{fontWeight:"normal"}}>{movie.length}</span> <br/>
                </div>
            </div>
            <iframe allowFullScreen src={movie.trailer} style={{margin:"auto", marginBottom:"20px", display:"block", width:"70%", height:"700px"}}></iframe>
        </div>
        
            
       
    )
}

export default MovieDetails
