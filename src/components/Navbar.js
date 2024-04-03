import React, { useState } from "react";
import { useRef } from "react";
import Logo from "../assets/FlavourBurgers.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Link to="/"> 
      <img src={Logo} width={100} alt="logotype" />
      </Link>
      <nav ref={navRef}>
        <Link to="/"> Hem </Link>
        <Link to="/meny"> Meny </Link>
        <Link to="/bestallOnline"> Beställ Online </Link>
        <Link to="/omOss"> Om oss </Link>
        <Link to="/happenings"> Happenings </Link>
        <Link to="/Kontakt"> Kontakt </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <HighlightOffIcon fontSize="large" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <ReorderIcon fontSize="large" />
      </button>
    </header>
  );
}

export default Navbar;
