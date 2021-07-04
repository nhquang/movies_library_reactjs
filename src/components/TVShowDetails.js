import React from 'react'

const TVShowDetails = ({tvshow}) => {
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
