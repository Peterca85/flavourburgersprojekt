import React from 'react'
import "../../styles/Dips.css";
import ListItem from '../../components/ListItem';
import HamburgerImage from "../../assets/burgermonth.jpg";



const menuDataRight = [

  { 
      title: "Bearnaise",
      description: "Bea smak",
      price: "15",


  },
  
  { 
      title: "Bluecheese",
      description: "Den vanliga goda",
      price: "20",


  },

 {
      title: "Smältost",
      description: "Cheddar",
      price: "30",


  },

];


function Dips() {
  return (
    <div className='container coffee-selection'>
      <h1 className='heading-secondary'>
        Dippar

      </h1>

      <div className='grid-container'>
<div>
  <img src= {HamburgerImage} alt= "Hamburger"/>

</div>

{menuDataRight.map((data, i )=> (
  <ListItem
   title={data.title} 
  description={data.description} 
  price={data.price}></ListItem>
))}
<div>

</div>
      
      </div>
    </div>
  )
}

export default Dips
