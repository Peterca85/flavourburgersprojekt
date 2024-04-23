import React from "react";
import ListItem from "../../components/ListItem";
import "../../styles/Drink.css";
import cocacola from "../../assets/cola.jpg";
import heineken from "../../assets/heineken1.jpg";
import moretti from "../../assets/birra-moretti.jpg";
import carlsberg from "../../assets/carlsberg.png";
import sprite from "../../assets/sprite.jpg";
import pepsi from "../../assets/pepsi.jpg";
import loka from "../../assets/loka.jpg";
import fanta from "../../assets/fanta.jpg";
import trocca from "../../assets/troccadero.jpeg";

export const menuDataLeft = [
  {
    id: 21,
    title: "Coca Cola",
    description: "33 Cl",
    price: "30",
    img: cocacola,
  },

  {
    id: 22,
    title: "Fanta",
    description: "33 Cl",
    price: "30",
    img: fanta,
  },

  {
    id: 23,
    title: "Trocadero",
    description: "33 Cl",
    price: "30",
    img: trocca,
  },
];

export const menuDataMiddle = [
  {
    id: 24,
    title: "Sprite",
    description: "33 Cl",
    price: "30",
    img: sprite,
  },

  {
    id: 25,
    title: "Pepsi",
    description: "33 Cl",
    price: "30",
    img: pepsi,
  },

  {
    id: 26,
    title: "Loka",
    description: "33 Cl",
    price: "30",
    img: loka,
  },
];

export const menuDataRight = [
  {
    id: 27,
    title: "Heineken",
    description: " 33 Cl",
    price: "70",
    img: heineken,
  },

  {
    id: 28,
    title: "Morretti",
    description: "33 Cl",
    price: "85",
    img: moretti,
  },

  {
    id: 29,
    title: "Carlsberg",
    description: "50 Cl",
    price: "75",
    img: carlsberg,
  },
];

function Drink() {
  return (
    <div className="section">
      <div className="container-drinks">
        <h1 className="heading-secondary">Dryck</h1>

        <div className="grid-container">
          <div>
            {menuDataLeft.map((data, i) => (
              <ListItem
                key={i}
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.img}
                id={data.id}
              ></ListItem>
            ))}
          </div>

          <div>
            {menuDataMiddle.map((data, i) => (
              <ListItem
                key={i}
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
                key={i}
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

export default Drink;
