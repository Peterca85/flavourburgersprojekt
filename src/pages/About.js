import React from 'react'
import Personal from "../assets/FlavourBurgers.png";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
  

      <div className='logo'
            style={{ backgroundImage: `url(${Personal})` }}
            ></div>
      <div className='aboutBottom'>
        <h1>Om oss</h1>
       
        <p>Välkommen till Flavour Burgers, där varje tugga
             tar dig på en smakresa du sent kommer att glömma!
              Vi är inte bara en hamburgerrestaurang, vi är en
               destination för de som älskar att uppleva nya 
               smaker och njuta av högkvalitativa råvaror i varje måltid.</p>
      <br></br>
               <p>Vi på Flavour Burgers strävar efter att erbjuda mer än bara en vanlig
                hamburgare. Vårt koncept handlar om att skapa unika smakkombinationer 
                som stimulerar dina smaklökar och får dig att komma tillbaka efter mer.
                 Varje burgare är skapad med omsorg och expertis för att ge dig en 
                 smakupplevelse utöver det vanliga.</p>
         <br></br>
                 <p>Vi använder endast de färskaste och högsta kvalitetsingredienserna för 
                    att säkerställa att varje burgare är en fest för dina smaklökar.
                     Från saftiga köttburgare till vegetariska 
                    alternativ och specialburgare inspirerade av smaker från 
                    hela världen - vi har något för alla.</p>
                    <br></br>
                    <p>Hos Flavour Burgers vill vi inte bara tillfredsställa din aptit, 
                        vi vill också skapa en atmosfär där du kan koppla av och njuta 
                        av varje måltid. Vår restaurang är
                         designad för att vara mysig och inbjudande, perfekt för en trevlig
                          måltid med vänner och familj. </p>
                          <br></br>
                          <p>Vårt team består av passionerade matälskare och kockar som brinner
                            för att skapa fantastiska smakupplevelser. Vi strävar efter att leverera
                             utmärkt service och göra varje besök till Flavour Burgers till en minnesvärd
                              upplevelse för våra kunder.</p>
                            
                              <p> När du besöker Flavour Burgers kan du förvänta dig mer än bara en 
                                vanlig hamburgare. Vi är dedikerade till att erbjuda enastående smaker,
                                 förstklassiga råvaror och en trevlig atmosfär som får dig att vilja komma tillbaka gång på gång.
                                 Kom och upplev smaken av Flavour Burgers idag och låt oss ta dig med på en gastronomisk resa du sent kommer att glömma!</p>
                           
      
      </div>
      </div>
  )
}

export default About
