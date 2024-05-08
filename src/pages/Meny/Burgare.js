import React from "react";
import "../../styles/Burgare.css";
import ListItem from "../../components/ListItem";
import cheeseburger from "../../assets/cheeseburger.jpg";
import taco from "../../assets/taco.jpg";
import dubbel from "../../assets/dubbel.jpg";
import jalapeno from "../../assets/jalapeno.jpg";
import burger from "../../assets/baconburger.jpg";
import veggie from "../../assets/veggie.jpg";

export const menuDataLeft = [
  {
    id: 1,
    title: " Bacon Burgare",
    description: " Bacon,ost,Gul lök",
    price: "100",
    img: burger,
  },

  {
    id: 2,
    title: "Cheeseburgare",
    description: "Cheddarost,Gul lök,Sallad,Orginaldressing",
    price: "109",
    img: cheeseburger,
  },

  {
    id: 3,
    title: "Veggieburgare",
    description: "Växtbaeradburgare,Cheddar,Sallad,Tomater",
    price: "109",
    img: veggie,
  },
];

export const menuDataRight = [
  {
    id: 4,
    title: "Tacofiesta",
    description: "Guacamole,Rödlök,Sallad,Salsa",
    price: "129",
    img: taco,
  },

  {
    id: 5,
    title: "Dubbelcheese",
    description: "2 X 60 g nötkott,Cheddarost,Rödlök,BBQ-dressing",
    price: "125",
    img: dubbel,
  },

  {
    id: 6,
    title: "Jalapeño fiesta",
    description: "jalapeños,Cheddar,Monterey jack ost, Avokdadom Guacamole,Salsa",
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
