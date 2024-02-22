import React from "react"
import {Link} from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <div className='headerContainer'>
        <h1> Flavour Burgers </h1>
        <p> Bästa Burgarna i stan </p>
        <Link to="/BestallOnline">
        <button> BESTÄLL HÄR </button>
        </Link>
      </div>
    
    </div>
  );
}

export default Home
