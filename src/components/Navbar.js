import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav>
      <div className="topnav" id="myTopnav">
        <Link to="/" className="active" style={{float: "left"}}>Home</Link>
        <Link to="/login">Sign in</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
    )
}

export default Navbar
