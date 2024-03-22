import React from 'react'
import ListItem from '../../components/ListItem';
import "../../styles/Sides.css";


const menuDataLeft= [
    {

  
        title: "Fries",
        description: "Klassiska Pommes",
        price: "25",


    },

    {

   

        title: "Animal fries",
        description: "Pommes med kött",
        price: "70",


    },

    {

    
        title: "Chili Chease",
        description: "Med Ost",
        price: "20",


    },
    
];

const menuDataRight= [
    {

  
        title: "Cheddar Fries",
        description: "Med Smältost",
        price: "12",


    },

    {

   

        title: "Carrots",
        description: "Morötter",
        price: "49",


    },

    {

    
        title: "Söt Potatis Fries",
        description: "Med Sötpotatis",
        price: "35",


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
    </div>
  )

}

export default Sides
