import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";
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
import Cookies from 'universal-cookie';
import Dashboard from "./components/Dashboard";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [slideShowItems, setslideShowItems] = useState([]);
  const [movies, setmovies] = useState([]);
  const [tvshows, settvshows] = useState([]);
  const [featuredMovies, setfeaturedMovies] = useState([]);
  const [featuredTVShows, setfeaturedTVShows] = useState([]);
  const [loggedIn, setloggedIn] = useState(false);

  //const history = useHistory();
  useEffect(() => {
      const fetchLoggedIn = () =>{
          const cookies = new Cookies();
          if(cookies.get("token")) setloggedIn(true);
      }
      const fetchMovies = async () =>{
            //const data = await fetch("http://localhost:4000/api/movies");
            const data = await fetch("https://movies-night-back.herokuapp.com/movies");
			      const parsed = await data.json();
            
            setmovies(prev => parsed);
      }
      const fetchTVShows = async() =>{
            //const data = await fetch("http://localhost:4000/api/tvShows");
            const data = await fetch("https://movies-night-back.herokuapp.com/tvshows");
			      const parsed = await data.json();
            
            settvshows(prev => parsed);
      }
      const fetchSlideShowItems = async() =>{
            //const data = await fetch("http://localhost:4000/api/banners");
            const data = await fetch("https://movies-night-back.herokuapp.com/banners");
			      const parsed = await data.json();
            setslideShowItems(prev => parsed);
      }
      const fetchFeaturedMovies = async() => {
        const data = await fetch("https://movies-night-back.herokuapp.com/movies/featured");
        const parsed = await data.json();
        setfeaturedMovies(prev => parsed);
      }
      const fetchFeaturedTVShows = async() => {
        const data = await fetch("https://movies-night-back.herokuapp.com/tvshows/featured");
        const parsed = await data.json();
        setfeaturedTVShows(prev => parsed);
      }
      fetchLoggedIn();
      fetchMovies();
      fetchTVShows();
      fetchSlideShowItems();
      fetchFeaturedMovies();
      fetchFeaturedTVShows();
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
  const setLoggedIn = () =>{
    setloggedIn(true);
  };
  const setLoggedOut = () =>{
    const cookies = new Cookies();
    cookies.remove("token", { path: '/' });
    setloggedIn(false);
  }
  return (
    
    <Router>
      <div className = "container">
      <Navbar handleShowRegister={handleShowRegister} handleShowLogin={handleShowLogin} loggedIn = {loggedIn} setloggedOut ={setLoggedOut}/>
      <Modal className="modal" show={showRegister} style={{height: "80%"}}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <RegisterBox style={{}}/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{fontFamily:"Poppins", cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginTop:"10px", marginBottom:"25px", width:"37.5%", height:"auto"}} onClick={handleCloseRegister}>Close</Button>
        </Modal.Footer>            
      
      </Modal>
      <Modal className="modal" show={showLogin} style={{height: "41.5%"}}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <LoginBox setLoggedIn = {setLoggedIn} handleCloseLogin={handleCloseLogin}/>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{fontFamily:"Poppins", cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginTop:"10px", marginBottom:"25px", width:"37.5%", height:"auto"}} onClick={handleCloseLogin}>Close</Button>
        </Modal.Footer>            
      
      </Modal>
      <Switch>
        {/* <Route path='/' exact component={<Home movies={movies} tvshows ={tvshows} slideShowItems={slideShowItems}/>}/> */}
        <Route exact path='/'>
          <Home featuredMovies = {featuredMovies} featuredTVShows = {featuredTVShows} slideShowItems={slideShowItems}/>
        </Route>
        <Route path='/movies' exact>
          <MoviesPage movies={movies}/>
        </Route>
        <Route path='/movies/:id' component={MovieDetails}/>
        <Route path='/tvshows' exact>
          <TVShowsPage tvshows = {tvshows}/>
        </Route>
        <Route path='/tvshows/:id' component={TVShowDetails}/>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
