import React from "react";
import "../../styles/Burgare.css";
import ListItem from "../../components/ListItem";
import burgerImage from "../../assets/burgermonth.jpg";
import cheeseburger from "../../assets/cheeseburger.jpg";
import taco from "../../assets/taco.jpg";
import dubbel from "../../assets/dubbel.jpg";
import jalapeno from "../../assets/jalapeno.jpg";
import burger from "../../assets/baconburger.jpg";
import veggie from "../../assets/veggie.jpg";

export const menuDataLeft = [
  {
    id: 1,
    title: "Burgare",
    description: "Med Bacon",
    price: "100",
    img: burger,
  },

  {
    id: 2,
    title: "Cheeseburgare",
    description: "Med Ost",
    price: "109",
    img: cheeseburger,
  },

  {
    id: 3,
    title: "Veggieburgare",
    description: "Vegetarisk",
    price: "109",
    img: veggie,
  },
];

export const menuDataRight = [
  {
    id: 4,
    title: "Tacofiesta",
    description: "Tex Mex",
    price: "129",
    img: taco,
  },

  {
    id: 5,
    title: "Dubbelcheese",
    description: "Dubbel Ost",
    price: "125",
    img: dubbel,
  },

  {
    id: 6,
    title: "Jalapeño fiesta",
    description: "kryddig",
    price: "129",
    img: jalapeno,
  },
];

function Burgare() {
  return (
    <div className="container-burgare">
      <h1 className="heading-secondary">Burgare</h1>

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

export default Burgare;
