import React from 'react'
import ListItem from '../../components/ListItem';
import "../../styles/Drink.css";



const menuDataLeft= [
    {

  
        title: "Coca Cola",
        description: "33 Cl",
        price: "30",
       


    },

    {

   

        title: "Fanta",
        description: "33 Cl",
        price: "25",


    },

    {

    
        title: "Trocadero",
        description: "33 Cl",
        price: "20",


    },
    
];

const menuDataMiddle= [
    {

  
        title: "Sprite",
        description: "33 Cl",
        price: "25",


    },

    {

   

        title: "Pepsi",
        description: "33 Cl",
        price: "25",


    },

    {

    
        title: "Zingo",
        description: "33 Cl",
        price: "20",


    },
    
];


const menuDataRight= [
    {

  
        title: "Heineken",
        description: " 33 Cl",
        price: "70",


    },

    {

   

        title: "Morretti",
        description: "33 Cl",
        price: "85",


    },

    {

    
        title: "Carlsberg",
        description: "50 Cl",
        price: "75",


    },
    
];

function Drink() {
  return (
    <div className='section'>
        <div className='container-drinks'>
<h1 className='heading-secondary'>
Dryck

</h1>

<div className='grid-container'>

    <div>
        {menuDataLeft.map((data, i) => (
            <ListItem
            key={i}
            title={data.title}
            description={data.description}
            price={data.price}>
              
            </ListItem>
        ))}
    </div>

    <div>
        {menuDataMiddle.map((data, i) => (
            <ListItem
            key={i}
            title={data.title}
            description={data.description}
            price={data.price}>
               
            </ListItem>
        ))}
    </div>

    <div>
        {menuDataRight.map((data, i) => (
            <ListItem
            key={i}
                title={data.title}
                description={data.description}
                price={data.price}>
                
            </ListItem>
        ))}
    </div>
        </div>
        </div>
   
    </div>

   
  )
}

export default Drink
