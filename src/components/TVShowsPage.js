import React from 'react'
import { useState, useEffect } from 'react'
import Item from './Item'
import Header from './Header'
import { Modal, Button } from 'react-bootstrap'
import TVShowDetails from './TVShowDetails'

const TVShowsPage = () => {
    const [tvshows, settvshows] = useState([]);
    const [show, setShow] = useState(false);
    const [tvshow, setTvshow] = useState({});

    useEffect(() => {
        const fetchTVShows = async () =>{
            const data = await fetch("http://localhost:3000/tvShows");
            const parsed = await data.json();
            settvshows(prev => parsed);
            
        }
        fetchTVShows();
    }, []);

    const handleClose = () => {
        setShow(prev => false);
        const temp = {url: "", name:"", overview:"", genres:[], releaseDate:"", episodes: "", seasons: "", trailer:"", poster: ""};
        setTvshow(prev => temp);
    }
    
    const handleShow = (tvshow) => {
        setShow(prev => true);
        setTvshow(prev => tvshow);
    };

    return (
        <>
            <Header title={"All TV Shows"} />
            <Modal className="modal" show={show}>
                <Modal.Header>
                    
                </Modal.Header>
                <Modal.Body>
                    <TVShowDetails tvshow={tvshow}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{fontFamily:"Poppins", cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginBottom:"20px", width:"100px", height:"50px"}} onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div className="container-grid">
                {tvshows.map((item)=>(
                    <Item key={item.url} item={item} notFromHome={true} handleShow={handleShow}/>
                ))}
            </div>
        </>
    )
}

export default TVShowsPage
