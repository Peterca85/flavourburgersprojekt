import React from "react";
import ListItem from "../../components/ListItem";
import "../../styles/Sides.css";
import fries1 from "../../assets/Fries.jpg";

export const menuDataLeft = [
  {
    id: 7,
    title: "Classic Fries",
    description: "Klassiska Pommes",
    price: "25",
    img: fries1,
  },

  {
    id: 8,
    title: "Animal fries",
    description: "Pommes med kött",
    price: "70",
    img: fries1,
  },

  {
    id: 9,
    title: "Chili Chease",
    description: "Med Ost",
    price: "20",
    img: fries1,
  },
];

export const menuDataRight = [
  {
    id: 10,
    title: "Cheddar Fries",
    description: "Med Smältost",
    price: "12",
    img: fries1,
  },

  {
    id: 11,
    title: "Carrots",
    description: "Morötter",
    price: "49",
    img: fries1,
  },

  {
    id: 12,
    title: "Söt Potatis Fries",
    description: "Med Sötpotatis",
    price: "35",
    img: fries1,
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
