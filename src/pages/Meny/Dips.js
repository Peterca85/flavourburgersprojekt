import React from 'react'
import "../../styles/Dips.css";
import ListItem from '../../components/ListItem';
import Dip from "../../assets/dipsauce.jpg";



const menuDataRight = [

  { 
      title: "Bearnaise",
      description: "Bea smak",
      price: "15",


  },
  
  { 
      title: "Blue-chese",
      description: "Den vanliga goda",
      price: "20",


  },

 {
      title: "Smältost",
      description: "Cheddar",
      price: "30",


  },

  {
    title: "Orginal Dip",
    description: "Klassikern",
    price: "30",


},

{
  title: "Salsa Dip",
  description: "Med sting ",
  price: "30",


},

{
  title: "Vitlök",
  description: "Yummy",
  price: "30",


},
  
{
  title: "Barbecue",
  description: "BBQ",
  price: "30",


},
  
{
  title: "Tryffel Majo",
  description: "Smarrig",
  price: "30",


},  

];


function Dips() {
  return (
    <div className='container-dips'>
      <h1 className='heading-secondary'>
        Dippar

      </h1>

      <div className='grid-container'>
<div>
  <img src= {Dip} alt= "Hamburger"/>

</div>

<div>
{menuDataRight.map((data, i )=> (
  <ListItem
   title={data.title} 
  description={data.description} 
  price={data.price}></ListItem>
))}


          </div>
      
      </div>
    </div>
  )
}

export default Dips
