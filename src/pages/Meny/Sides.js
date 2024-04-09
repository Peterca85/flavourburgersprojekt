import React from 'react'
import ListItem from '../../components/ListItem';
import "../../styles/Sides.css";
import fries1 from "../../assets/Fries.jpg";

const menuDataLeft= [
    {

  
        title: "Classic Fries",
        description: "Klassiska Pommes",
        price: "25",
        img:fries1,


    },

    {

   

        title: "Animal fries",
        description: "Pommes med kött",
        price: "70",
        img:fries1,


    },

    {

    
        title: "Chili Chease",
        description: "Med Ost",
        price: "20",
        img:fries1,


    },
    
];

const menuDataRight= [
    {

  
        title: "Cheddar Fries",
        description: "Med Smältost",
        price: "12",
        img:fries1,


    },

    {

   

        title: "Carrots",
        description: "Morötter",
        price: "49",
        img:fries1,


    },

    {

    
        title: "Söt Potatis Fries",
        description: "Med Sötpotatis",
        price: "35",
        img:fries1,


    },
    
];




function Sides() {
  return (
 <div className='section'>
 <div className="container-sides">
      <h1 className='heading-secondary'>
     Sides
      </h1>

      <div className='grid-container'>
<div>
{menuDataLeft.map((data, i) =>(

<ListItem 
title={data.title} 
description={data.description} 
price={data.price}
itemImage={data.img}></ListItem>
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
    </div>
  )

}

export default Sides
