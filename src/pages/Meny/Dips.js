import React from "react";
import "../../styles/Dips.css";
import ListItem from "../../components/ListItem";
import dipsauce from "../../assets/dipsauce.jpg";
import reddip from "../../assets/redsauce.jpg";

export const menuDataLeft = [
  {
    id: 13,
    title: "Bearnaise",
    price: "15",
    img: dipsauce,
  },

  {
    id: 14,
    title: "Blue-chese",
    img: dipsauce,
  },

  {
    id: 15,
    title: "Cheddar",
    price: "15",
    img: dipsauce,
  },

  {
    id: 16,
    title: "Orginal Dip",
    price: "15",
    img: dipsauce,
  },
];

export const menuDataRight = [
  {
    id: 17,
    title: "Salsa Dip",
    price: "15",
    img: reddip,
  },

  {
    id: 18,
    title: "Vitlök",
    price: "15",
    img: dipsauce,
  },

  {
    id: 19,
    title: "Barbecue",
    price: "15",
    img: reddip,
  },

  {
    id: 20,
    title: "Tryffel Majo",
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
