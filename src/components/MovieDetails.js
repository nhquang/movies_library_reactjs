import React from 'react'
  
import { useParams } from "react-router-dom";

const MovieDetails = ({movie}) => {
    
    return (

        <div className="details">
            <img src={movie.poster} className="img" style={{borderRadius:"15px", width:"85%", margin:"auto", display:"block"}}/>
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
