import React, { useState } from 'react'
import Logo from "../assets/Flavour Burgers .png";
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks)


  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
      <img src={Logo}/>
      <div className='hiddenLinks'>
      <Link to="/"> Hem </Link> 
      <Link to="/meny"> Meny </Link> 
      <Link to="/bestallOnline"> Beställ Online </Link> 
      <Link to="/omOss"> Om oss </Link> 
      <Link to="/happenings"> Happenings </Link> 
      <Link to="/Kontakt"> Kontakt </Link> 
      </div>
      </div>
      <div className='rightSide'>
        <Link to="/"> Hem </Link> 
        <Link to="/meny"> Meny </Link> 
        <Link to="/bestallOnline"> Beställ Online </Link> 
        <Link to="/omOss"> Om oss </Link> 
        <Link to="/happenings"> Happenings </Link> 
        <Link to="/Kontakt"> Kontakt </Link> 
        <button onClick={toggleNavbar}>
        <ReorderIcon />
        </button>
        </div>
    </div>
  )
}

export default Navbar
