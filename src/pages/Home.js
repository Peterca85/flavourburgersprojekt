import React from "react"
import {Link} from "react-router-dom"
import videoBg from "../assets/bgvideo.mp4";
import BurgerMonth from "../assets/burgermonth.jpg"
import Room from "@mui/icons-material/Room";
import Burger from "../assets/transparent.png"
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1 className="startHeader"> Flavour Burgers </h1>
        <p className="startText">Bästa burgarna i stan !</p>
        <br></br>
        <Link to="/bestallOnline">
          <button className="startbutton">Beställ nu</button>
        </Link>
      </div>

      <div className="aboutUs">
        <p className="aboutParagraph">
          
          Våra burgare är inte bara mat, de är konstverk skapade med kärlek och
          omsorg. Varje ingrediens är noggrant utvald för att säkerställa att
          varje hamburgare inte bara smakar fantastiskt, utan också berikar dina
          smaklökar med en explosion av spännande smaker.
        </p>
      </div>

      <div className="hamburgerMonth">
        <h1>Månadens Hamburgare</h1>
        <img src={BurgerMonth} alt="Hamburgare" />
        <p>
          
          Månadens Hamburgare: Jalapeño Fiesta! En smakresa till Mexiko. Vid
          hjärtat av denna sensation hittar du en generöst kryddad burgare, vars
          smak är förhöjd av hettan från jalapeños och den karakteristiska
          smaken av chipotle. Toppad med en krämig och kryddig majonnäs, vars
          ingredienser kompletterar perfekt med den rika köttsmaken. En krispig
          sallad och mogen avokado lägger till en fräsch och balanserad
          dimension till varje tugga, vilket skapar smaker som är helt
          oemotståndlig. Denna hamburgare är en hyllning till Mexikos rika
          kulinariska arv och en fest för dem som älskar hetta och smakrikedom.
          Så låt oss ta dig med på en smakresa till Mexiko med varje tugga av
          Jalapeño Fiesta Burger.
        </p>
        <Link to="/bestallOnline">
          <button className="hamburgerButton">Beställ nu</button>
        </Link>
      </div>

 <div className="map">
  <div className="home-info">

  <Room fontSize="large"/>
 <h1>Hitta till oss</h1>


 </div>
<div className="map-responsive">



        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.2858409379212!2d22.140032677807977!3d65.5830595957321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467f6559a460dd51%3A0x9ef6d61a1c985b3!2sStorgatan%2012%2C%20972%2038%20Lule%C3%A5!5e0!3m2!1ssv!2sse!4v1710495957599!5m2!1ssv!2sse" 
        allowFullscreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map">

        </iframe>
        </div>
<div className="opening-hours">
<div className='logotype'>
          < img src={Burger} alt="Logo" />
            
            </div>
<h3>Storgatan 12</h3>
  <h4>Öppettider</h4>

  <ul>
  <li className="open">Mån: 12-21</li>
  <li  className="open">Tis: 12-21</li>
  <li  className="open">Ons: 12-21</li>
  <li  className="open">Tors:12-21</li>
  <li  className="open">Fre: 12-01</li>
  <li  className="open">Lör: 12-01</li>
  <li  className="open">Sön: 12-21</li>
  </ul>

        </div>
        </div>

     
    </div>
  );
}

export default Home
