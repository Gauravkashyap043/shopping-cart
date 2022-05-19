import React from 'react'
import {NavLink} from "react-router-dom"
import Login from "./buttons/Login"
import Signup from "./buttons/Signup"
// import Product from "./Product.jsx"

const Header = () => {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-light justify-bet">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li> 
     </ul>
     
      
    </div>
    <NavLink className="navbar-brand mx-auto fw-bold" to="/" >Shop Mart</NavLink>
    <Login />
    <Signup />
  </div>
</nav>
    </>
  )
}

export default Header
