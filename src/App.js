import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Home from "./components/Home";
import MoviesPage from "./components/MoviesPage";
import TVShowsPage from "./components/TVShowsPage";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import TVShowDetails from "./components/TVShowDetails";
import { Modal, Button } from 'react-bootstrap';
import RegisterBox from "./components/RegisterBox";
import LoginBox from "./components/LoginBox";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [slideShowItems, setslideShowItems] = useState([]);
  const [movies, setmovies] = useState([]);
  const [tvshows, settvshows] = useState([]);
  useEffect(() => {
      const fetchMovies = async () =>{
            //const data = await fetch("http://localhost:4000/api/movies");
            const data = await fetch("https://movies-night-nhquang.herokuapp.com/api/movies");
			      const parsed = await data.json();
            const temp = [];
            for(let i = 0; i < 8; i++)
                temp.push(parsed[i]);
            setmovies(prev => temp);
      }
      const fetchTVShows = async() =>{
            //const data = await fetch("http://localhost:4000/api/tvShows");
            const data = await fetch("https://movies-night-nhquang.herokuapp.com/api/tvShows");
			      const parsed = await data.json();
            const temp = [];
            for(let i = 0; i < 8; i++)
                temp.push(parsed[i]);
            settvshows(prev => temp);
      }
      const fetchSlideShowItems = async() =>{
            //const data = await fetch("http://localhost:4000/api/banners");
            const data = await fetch("https://movies-night-nhquang.herokuapp.com/api/banners");
			      const parsed = await data.json();
            setslideShowItems(prev => parsed);
      }
      fetchMovies();
      fetchTVShows();
      fetchSlideShowItems();
    }, []);

  const handleCloseRegister = () => {
    setShowRegister(prev => false);  
  }

  const handleShowRegister = () => {
    setShowRegister(prev => true);
    setShowLogin(prev => false);
  };
  const handleCloseLogin = () => {
    setShowLogin(prev => false);
  }

  const handleShowLogin = () => {
    setShowLogin(prev => true);
    setShowRegister(prev => false);
  };
  return (
    
    <Router>
      <div className = "container">
      <Navbar handleShowRegister={handleShowRegister} handleShowLogin={handleShowLogin}/>
      <Modal className="modal" show={showRegister} style={{height:"59%"}}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <RegisterBox />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{fontFamily:"Poppins", cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginTop:"10px", width:"37.5%", height:"auto"}} onClick={handleCloseRegister}>Close</Button>
        </Modal.Footer>            
      
      </Modal>
      <Modal className="modal" show={showLogin} style={{width:"47%", height:"42%"}}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <LoginBox />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{fontFamily:"Poppins", cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginTop:"10px", width:"37.5%", height:"auto"}} onClick={handleCloseLogin}>Close</Button>
        </Modal.Footer>            
      
      </Modal>
      <Switch>
        {/* <Route path='/' exact component={<Home movies={movies} tvshows ={tvshows} slideShowItems={slideShowItems}/>}/> */}
        <Route exact path='/'>
          <Home movies={movies} tvshows ={tvshows} slideShowItems={slideShowItems}/>
        </Route>
        <Route path='/movies' exact>
          <MoviesPage movies={movies}/>
        </Route>
        <Route path='/movies/:id' component={MovieDetails}/>
        <Route path='/tvshows' exact>
          <TVShowsPage tvshows = {tvshows}/>
        </Route>
        <Route path='/tvshows/:id' component={TVShowDetails}/>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
