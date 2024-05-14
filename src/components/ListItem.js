import React, { useContext } from "react";
import "../styles/ListItem.css";
import plusIcon from "../assets/plusicon.png";
import minusIcon from "../assets/redminusicon.png";
import greenPlusIcon from "../assets/greenaddicon.png";
import { StoreComponent } from "./StoreComponents";
import Tooltip from '@mui/material/Tooltip';

function ListItem({ id, title, description, price, itemImage }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreComponent);

  return (
    <div className="list-items" key={id}>
      <ul className="un-list">
        <li className="list-list">
          {itemImage && <img src={itemImage} alt="mat" />}

          <div>
            <h3>{title} </h3>
            {description && <h4>{description} </h4>}

            {!cartItems[id] ? (
                <Tooltip title="Klicka för att beställa" arrow>
              <img
                className="add"
                onClick={() => addToCart(id)}
                src={plusIcon}
                alt="add"
              ></img>
              </Tooltip>
            ) : (
              <div className="food-item-counter">
                 <Tooltip title="Ta bort Produkt" arrow>
                <img
                  className="remove"
                  onClick={() => removeFromCart(id)}
                  src={minusIcon}
                  alt="remove"
                ></img>
                </Tooltip>
                <p>{cartItems[id]}</p>
                <Tooltip title="Lägg till en Produkt" arrow>
                <img
                  className="remove"
                  onClick={() => addToCart(id)}
                  src={greenPlusIcon}
                  alt="add"
                ></img>
                </Tooltip>
              </div>
            )}
          </div>

          <h3> {price} kr </h3>
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
