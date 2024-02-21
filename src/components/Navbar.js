import React from 'react'
import Logo from "../assets/Flavour Burgers .png";
import {Link} from "react-router-dom"
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'></div>
      <img src={Logo}/>
      <div className='rightSide'>
        <Link to="/"> Hem </Link> 
        <Link to="/menu"> Meny </Link> 
        <Link to="/about"> Om oss </Link> 
        <Link to="/contact"> Kontakt </Link> 
        </div>
    </div>
  )
}

export default Navbar
