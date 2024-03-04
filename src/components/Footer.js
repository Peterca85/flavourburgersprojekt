import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <InstagramIcon />
          <Facebook />
        </div>
    <p> © 2024 FlavourBurgers.se</p>
    </div>
  )
}

export default Footer
