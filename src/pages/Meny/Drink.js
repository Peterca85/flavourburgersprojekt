import React from "react";
import ListItem from "../../components/ListItem";
import "../../styles/Drink.css";

export const menuDataLeft = [
  {
    id: 21,
    title: "Coca Cola",
    description: "33 Cl",
    price: "30",
  },

  {
    id: 22,
    title: "Fanta",
    description: "33 Cl",
    price: "25",
  },

  {
    id: 23,
    title: "Trocadero",
    description: "33 Cl",
    price: "20",
  },
];

export const menuDataMiddle = [
  {
    id: 24,
    title: "Sprite",
    description: "33 Cl",
    price: "25",
  },

  {
    id: 25,
    title: "Pepsi",
    description: "33 Cl",
    price: "25",
  },

  {
    id: 26,
    title: "Zingo",
    description: "33 Cl",
    price: "20",
  },
];

export const menuDataRight = [
  {
    id: 27,
    title: "Heineken",
    description: " 33 Cl",
    price: "70",
  },

  {
    id: 28,
    title: "Morretti",
    description: "33 Cl",
    price: "85",
  },

  {
    id: 29,
    title: "Carlsberg",
    description: "50 Cl",
    price: "75",
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
