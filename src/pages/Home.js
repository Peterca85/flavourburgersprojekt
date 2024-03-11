import React from "react"
import {Link} from "react-router-dom"
import videoBg from "../assets/bgvideo.mp4";
import BurgerMonth from "../assets/burgermonth.jpg"
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
          {" "}
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
          {" "}
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
          Jalapeño Fiesta Burger.{" "}
        </p>
      </div>

      <div className="openHours">
        <h1>Vi har öppet </h1>
        <h3>Måndag 12-21</h3>
        <h3>Tisdag 12-21</h3>
        <h3>Onsdag 12-21</h3>
        <h3>Torsdag 12-21</h3>
        <h3>Fredag 12-01</h3>
        <h3>Lördag 12-01</h3>
        <h3>Söndag 12-21</h3>
      </div>
    </div>
  );
}

export default Home
