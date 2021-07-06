import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
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
      <Modal className="modal" show={showRegister}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <RegisterBox />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{fontFamily:"Poppins", cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginBottom:"20px", marginTop:"10px", width:"37.5%", height:"auto"}} onClick={handleCloseRegister}>Close</Button>
        </Modal.Footer>            
      
      </Modal>
      <Modal className="modal" show={showLogin} style={{width:"47%"}}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <LoginBox />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{fontFamily:"Poppins", cursor:"pointer", display: "block", marginLeft:"auto", marginRight:"auto", backgroundColor:"red", borderRadius: "5px", marginBottom:"20px", marginTop:"10px", width:"37.5%", height:"auto"}} onClick={handleCloseLogin}>Close</Button>
        </Modal.Footer>            
      
      </Modal>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/movies' exact component={MoviesPage}/>
        <Route path='/movies/:id' component={MovieDetails}/>
        <Route path='/tvshows' exact component={TVShowsPage}/>
        <Route path='/tvshows/:id' component={TVShowDetails}/>
      </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
