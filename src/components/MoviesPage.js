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
    const [title, setTitle] = useState("");

    useEffect(() => {
        const fetchMovies = async () =>{
            const data = await fetch("http://localhost:3000/movies");
            const parsed = await data.json();
            setMovies(prev => parsed);
        }
        fetchMovies();
    }, []);

    const handleClose = () => {
        setShow(prev => false);
        const temp = {url: "", name:"", overview:"", genres:[], releaseDate:"", episodes: "", seasons: "", trailer:"", poster: ""};
        setMovie(prev => temp);
    }
    
    const handleShow = (movie) => {
        setShow(prev => true);
        setMovie(prev => movie);
    };
    
    return (
        <>
            <Header title={"All Movies"} />
            <Modal className="modal" show={show}>
                <Modal.Header>
                    
                </Modal.Header>
                <Modal.Body>
                    <MovieDetails movie={movie}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginBottom:"20px", width:"100px", height:"50px"}} onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div className="container-grid">
                {movies.map((item)=>(
                    <Item key={item.url} item={item} handleShow={handleShow}/>
                ))}
            </div>
        </>
    )
}

export default MoviesPage
