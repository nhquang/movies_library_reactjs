import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({handleShowRegister, handleShowLogin}) => {
    return (
    <nav>
      <div className="topnav" id="myTopnav">
        <Link to="/" className="active" style={{float: "left"}}>Home</Link>
        <Link to="/movies" style={{float: "left" }}>Movies</Link>
        <Link to="/tvshows" style={{float: "left" }}>TV Shows</Link>
        {/* <Link to="/login">Sign in</Link>
        <Link to="/register">Register</Link> */}
        <a onClick={handleShowLogin} style={{cursor:"pointer"}}>Sign In</a>
        <a onClick={handleShowRegister} style={{cursor:"pointer"}}>Register</a>
      </div>
    </nav>
    )
}

export default Navbar
