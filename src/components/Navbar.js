import React, { useState } from "react";
import { useRef } from "react";
import Logo from "../assets/FlavourBurgers.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import "../styles/Navbar.css";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

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
        <Link to="/omOss"> Om oss </Link>
        <Link to="/happenings"> Happenings </Link>
        <Link to="/Kontakt"> Kontakt </Link>
        <Link to="/cart">
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
          </Badge>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <HighlightOffIcon fontSize="large" />
        </button>
      </nav>
     <button className="nav-btn" onClick={toggleNavbar}>
        <ReorderIcon fontSize="large" />
      </button>
    </header>
  );
}

export default Navbar;
