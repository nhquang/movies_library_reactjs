import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TVShowDetails = () => {
    const { id } = useParams();
    const [tvshow, setTVshow] = useState({name:"", url:"", overview:"", genres:[], releaseDate:"", episodes:"", seasons:"", trailer:"", poster:"" })
    useEffect(() => {
        const fetchTVShow = async () =>{
            const data = await fetch(`http://localhost:3000/tvshows/${id}`);
            const parsed = await data.json();
            console.log(parsed);
            setTVshow(prev => parsed);
        };
        fetchTVShow();
    }, [])
    
    return (
        <div className="details">
            <img src={tvshow.poster} className="img" style={{borderRadius:"15px", width:"85%", margin:"auto", display:"block"}}/>
            <div className="content">
                <h1 style={{textAlign:"center"}}>{tvshow.name}</h1>
                <div className="content-text">
                    Overview: <span style={{fontWeight:"normal"}}>{tvshow.overview}</span> <br/>
                    Genres: <span style={{fontWeight:"normal"}}>{tvshow.genres.join(', ')}</span> <br/>
                    Release Date: <span style={{fontWeight:"normal"}}>{tvshow.releaseDate}</span> <br/>
                    No of seasons: <span style={{fontWeight:"normal"}}>{tvshow.seasons}</span> <br/>
                    No of episodes: <span style={{fontWeight:"normal"}}>{tvshow.episodes}</span> <br/>
                </div>
            </div>
            <iframe allowFullScreen src={tvshow.trailer} style={{margin:"auto", marginBottom:"20px", display:"block", width:"70%", height:"700px"}}></iframe>
        </div>
    )
}

export default TVShowDetails
