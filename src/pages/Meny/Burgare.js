import React from 'react'
import "../../styles/Burgare.css";
import ListItem from "../../components/ListItem";
import burgerImage from "../../assets/burgermonth.jpg"


const menuDataLeft= [
    {

  
        title: "Burgare",
        description: "Med Bacon",
        price: "100",
      img: burgerImage,

    },

    {

   

        title: "Cheeseburgare",
        description: "Med Ost",
        price: "109",
        img: burgerImage,

    },

    {

    
        title: "Veggieburgare",
        description: "Vegetarisk",
        price: "110",
        img: burgerImage,

    },
    
];


const menuDataRight = [

    { 
        title: "Tacofiesta",
        description: "Tex Mex",
        price: "129",
        img: burgerImage,

    },
    
    { 
        title: "Dubbelcheese",
        description: "Dubbel Ost",
        price: "125",
        img: burgerImage,

    },

   {
        title: "Jalapeño fiesta",
        description: "kryddig",
        price: "130",
        img: burgerImage,

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
price={data.price}
itemImage={data.img}>
</ListItem>
))}

</div>

<div>
{menuDataRight.map((data, i) =>(

<ListItem 
title={data.title} 
description={data.description} 
price={data.price}
itemImage={data.img}></ListItem>
))}

</div>

      </div>
    </div>
  )
}

export default Burgare

