import React from "react"
import {Link} from "react-router-dom"
import videoBg from "../assets/bgvideo.mp4";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home"> 
    <div> className="overlay"</div> 
    <video src={videoBg} autoPlay loop muted /> 
      <div className='content'> 
      <h1> Flavour Burgers </h1>
     <p>Bästa burgarna i stan !</p>
      </div>
    
    </div>
  );
}

export default Home
