import React from "react"
import {Link} from "react-router-dom"
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" >Home</Link>
      <Link to="/books" >Shop</Link>
      <Link to="/admin" >Admin Portal</Link>
    </nav>
  )
}

export default NavBar