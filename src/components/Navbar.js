import React, { useState, useContext } from "react";
import { useRef } from "react";
import Logo from "../assets/FlavourBurgers.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StoreComponent } from "./StoreComponents";

import Badge from "@mui/material/Badge";
import "../styles/Navbar.css";

function Navbar() {
  const { sumItemsCart } = useContext(StoreComponent);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  console.log(sumItemsCart());

  return (
    <header>
      <Link to="/">
        <img src={Logo} width={100} alt="logotype" />
      </Link>
    <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <Link to="/" onClick={closeNavbar}>
          Hem
        </Link>
        <Link to="/meny" onClick={closeNavbar}>
          Meny
        </Link>
        <Link to="/omOss" onClick={closeNavbar}>
          Om oss
        </Link>
        <Link to="/happenings" onClick={closeNavbar}>
          Happenings
        </Link>
        <Link to="/Kontakt" onClick={closeNavbar}>
          Kontakt
        </Link>
   <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <HighlightOffIcon fontSize="large" />
        </button>
      </nav>
      <div className="cart-top">
      <Link to="/cart" onClick={closeNavbar}>
          <Badge badgeContent={sumItemsCart()} color="success">
            <ShoppingCartIcon  style={{ color: '#fff' }} fontSize="large"/>
          </Badge>
        </Link>
        </div>
      <button className="nav-btn" onClick={showNavbar}>
        <ReorderIcon fontSize="large" />
      </button>
    </header>
  );
}

export default Navbar;
