import React from 'react'
import Burgare from './Meny/Burgare';
import Sides from './Meny/Sides';
import Dips from "./Meny/Dips";
import Drink from './Meny/Drink';
import TopImage from './TopImage/TopImage';
import headerImage from "../assets/hamburgerBackground.jpg";




function Menu() {
  return (
    
    <div>
      <TopImage
              headerImage={headerImage}
              heading={["Vår Meny"]}
              text="Det här erbjuder vi"/>

     
    <Burgare></Burgare>
    <Sides></Sides>
    <Dips></Dips>
    <Drink></Drink>
   </div>
  
);
}
export default Menu
