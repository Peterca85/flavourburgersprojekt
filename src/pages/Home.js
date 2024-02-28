import React from "react"
import {Link} from "react-router-dom"
import videoBg from "../assets/bgvideo.mp4";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home"> 
 <video src={videoBg} autoPlay loop muted /> 
      <div className='content'> 
      <h1 className="startHeader"> Flavour Burgers </h1>
     <p className="startText">Bästa burgarna i stan !</p>
   <br></br>
     <Link to="/bestallOnline">
     <button className="startbutton">Beställ nu</button>
     </Link>
     </div>
    
    </div>
  );
}

export default Home
