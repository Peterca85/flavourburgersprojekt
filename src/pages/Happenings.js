import React, { useState } from "react";
import "../styles/Happenings.css";
import Dj from "../assets/dj.jpg";
import Artist from "../assets/sheartist.jpg";
import MrDj from "../assets/mrdj.jpg";
import ArtistOne from "../assets/artistOne.jpg";
import ArtistTwo from "../assets/artistTwo.jpg";
import ArtistThree from "../assets/artistThree.jpg";
import ArtistFour from "../assets/artistFour.jpg";
import ArtistFive from "../assets/artistFive.jpg";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

const images = [
  { title: "MrDj", img: MrDj },
  { title: "Dj", img: Dj },
  { title: "Artist", img: Artist },

];

function Happenings() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="happenings">
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${images[currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIos style={{ fontSize: 40 }}></ArrowBackIos>
          </div>
          <div className="center"></div>
          <div
            className="right"
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIos style={{ fontSize: 40 }}></ArrowForwardIos>
          </div>
        </div>
      </div>

      <div className="happeningsTop">
        <h1>Våra happenings</h1>

        <p>
          Under helgerna blir ett besök på vår restaurang en unik upplevelse
          fylld med spännande happenings, där en mångfald av artister och DJs
          uppträder för att skapa en atmosfär som lämnar våra gäster med
          oförglömliga minnen.{" "}
        </p>

        <p>
          Med en scen som är centralt placerad blir varje uppträdande en del av
          middagsupplevelsen. Våra gäster kan njuta av en mångfald av
          musikstilar och konstnärliga uttryck medan de avnjuter vår läckra mat.
        </p>

        <p>
          Från DJ-set som får dig i rätt stämning till intima
          liveframträdanden där sångare och musiker bjuder på personliga
          tolkningar av sina låtar, strävar vi efter att erbjuda en varierad och
          engagerande underhållning för alla smaker.
        </p>

    
        <p>
          Våra gäster kan förvänta sig att varje besök på vår restaurang blir en
          resa genom olika musikaliska världar, där de får möjlighet att
          upptäcka nya favoritartister och låtar samtidigt som de njuter av god
          mat och dryck i en inspirerande atmosfär.
        </p>
      </div>

      <div className="artist">
        <h1>Kommande Artister</h1>
        <figure>
          <img src={ArtistOne} alt="Artist" />
          <figcaption>Melodica</figcaption>
        </figure>
        <figure>
          <img src={ArtistTwo} alt="Artist" />
          <figcaption>Seraphina</figcaption>
        </figure>
        <figure>
          <img src={ArtistThree} alt="Artist" />
          <figcaption>Disco Dreamer</figcaption>
        </figure>
        <figure>
          <img src={ArtistFour} alt="Artist" />
          <figcaption>Mic Maverick</figcaption>
        </figure>
        <figure>
          <img src={ArtistFive} alt="Artist" />
          <figcaption>Blaze Rhythm</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Happenings;
