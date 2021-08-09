import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Navbar = ({handleShowRegister, handleShowLogin, loggedIn, setloggedOut}) => {
  const history = useHistory();
  const clicked = () => {
    setloggedOut();
    history.push("/");
  }  
  
  return (
    <nav>
      <div className="topnav" id="myTopnav">
        <Link to="/" className="active" style={{float: "left"}}>Home</Link>
        <Link to="/movies" style={{float: "left" }}>Movies</Link>
        <Link to="/tvshows" style={{float: "left" }}>TV Shows</Link>
        {/* <Link to="/login">Sign in</Link>
        <Link to="/register">Register</Link> */}
        {loggedIn ? <Link to="/dashboard">Dashboard</Link> : <a onClick={handleShowLogin} style={{cursor:"pointer"}}>Sign In</a>}
        {loggedIn ? <a onClick={clicked} style={{cursor:"pointer"}}>Log out</a> : <a onClick={handleShowRegister} style={{cursor:"pointer"}}>Register</a>}
      </div>
    </nav>
    )
}

export default Navbar
