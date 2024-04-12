import React from 'react'
import "../../styles/Dips.css";
import ListItem from '../../components/ListItem';
import Dip from "../../assets/dipsauce.jpg";



const menuDataRight = [

  { 
    id:13,
      title: "Bearnaise",
      description: "Bea smak",
      price: "15",


  },
  
  { 
    id:14,
      title: "Blue-chese",
      description: "Den vanliga goda",
      price: "20",


  },

 {
    id:15,
      title: "Smältost",
      description: "Cheddar",
      price: "30",


  },

  {
    id:16,
    title: "Orginal Dip",
    description: "Klassikern",
    price: "30",


},

{
  id:17,
  title: "Salsa Dip",
  description: "Med sting ",
  price: "30",


},

{
  id:18,
  title: "Vitlök",
  description: "Yummy",
  price: "30",


},
  
{
  id:19,
  title: "Barbecue",
  description: "BBQ",
  price: "30",


},
  
{
  id:20,
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
  price={data.price}
  id={data.id}></ListItem>
))}


          </div>
      
      </div>
    </div>
  )
}

export default Dips
