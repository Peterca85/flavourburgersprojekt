import React from "react";
import "../../styles/Dips.css";
import ListItem from "../../components/ListItem";
import dipsauce from "../../assets/dipsauce.jpg";
import reddip from "../../assets/redsauce.jpg";

export const menuDataLeft = [
  {
    id: 13,
    title: "Bearnaise",
    description: "Bea smak",
    price: "15",
    img: dipsauce,
  },

  {
    id: 14,
    title: "Blue-chese",
    description: "Den vanliga goda",
    price: "15",
    img: dipsauce,
  },

  {
    id: 15,
    title: "Smältost",
    description: "Cheddar",
    price: "15",
    img: dipsauce,
  },

  {
    id: 16,
    title: "Orginal Dip",
    description: "Klassikern",
    price: "15",
    img: dipsauce,
  },
];

export const menuDataRight = [
  {
    id: 17,
    title: "Salsa Dip",
    description: "Med sting ",
    price: "15",
    img: reddip,
  },

  {
    id: 18,
    title: "Vitlök",
    description: "Yummy",
    price: "15",
    img: dipsauce,
  },

  {
    id: 19,
    title: "Barbecue",
    description: "BBQ",
    price: "15",
    img: reddip,
  },

  {
    id: 20,
    title: "Tryffel Majo",
    description: "Smarrig",
    price: "15",
    img: dipsauce,
  },
];

function Dips() {
  return (

      <div className="container-dips">
      <h1 className="heading-secondary">Dippar</h1>

      <div className="grid-container">

        <div>
          {menuDataLeft.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
              id={data.id}
            ></ListItem>
          ))}
        </div>


        <div>
          {menuDataRight.map((data, i) => (
            <ListItem
              title={data.title}
              description={data.description}
              price={data.price}
              itemImage={data.img}
              id={data.id}
            ></ListItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dips;
