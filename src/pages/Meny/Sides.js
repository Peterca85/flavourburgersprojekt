import React from "react";
import ListItem from "../../components/ListItem";
import "../../styles/Sides.css";
import cheddar from "../../assets/Fries.jpg";
import orginalfries from "../../assets/orginalfries.jpg";
import onionrings from "../../assets/onionrings.jpg";
import sweetpotato from "../../assets/sweetpotato.jpg";
import animalfries from "../../assets/animalfries.jpg";
import chili from "../../assets/chili.jpg";

export const menuDataLeft = [
  {
    id: 7,
    title: "Classic Fries",
    description: "Klassiska Pommes",
    price: "25",
    img: orginalfries,
  },

  {
    id: 8,
    title: "Animal fries",
    description: "Pommes med Bacon & ost",
    price: "60",
    img: animalfries,
  },

  {
    id: 9,
    title: "Chili Cheese",
    description: "Med Chili & Ost",
    price: "30",
    img: chili,
  },
];

export const menuDataRight = [
  {
    id: 10,
    title: "Cheddar Fries",
    description: "Med Smältost",
    price: "35",
    img: cheddar,
  },

  {
    id: 11,
    title: "Onion Rings",
    description: "Lök ringar",
    price: "25",
    img: onionrings,
  },

  {
    id: 12,
    title: "Söt Potatis Fries",
    description: "Med Sötpotatis",
    price: "35",
    img: sweetpotato,
  },
];

function Sides() {
  return (
    <div className="section">
      <div className="container-sides">
        <h1 className="heading-secondary">Sides</h1>

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
    </div>
  );
}

export default Sides;
