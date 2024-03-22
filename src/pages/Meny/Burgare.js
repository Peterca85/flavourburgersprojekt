import React from 'react'
import "../../styles/Burgare.css";
import ListItem from "../../components/ListItem";


const menuDataLeft= [
    {

  
        title: "Burgare",
        description: "Med Bacon",
        price: "100",


    },

    {

   

        title: "Cheeseburgare",
        description: "Med Ost",
        price: "109",


    },

    {

    
        title: "Veggieburgare",
        description: "Vegetarisk",
        price: "110",


    },
    
];


const menuDataRight = [

    { 
        title: "Tacofiesta",
        description: "Tex Mex",
        price: "129",


    },
    
    { 
        title: "Dubbelcheese",
        description: "Dubbel Ost",
        price: "125",


    },

   {
        title: "Jalapeno fiesta",
        description: "kryddig",
        price: "130",


    },

];

function Burgare() {
  return (
    <div className="container-burgare">
      <h1 className='heading-secondary'>
    Burgare
      </h1>

      <div className='grid-container'>
<div>
{menuDataLeft.map((data, i) =>(

<ListItem 
title={data.title} 
description={data.description} 
price={data.price}></ListItem>
))}

</div>

<div>
{menuDataRight.map((data, i) =>(

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

export default Burgare

