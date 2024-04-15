import React, { useContext } from "react";
import { StoreComponent } from "../components/StoreComponents";
import {
  menuDataLeft as BurgareLeft,
  menuDataRight as BurgareRight,
} from "./Meny/Burgare";
import { menuDataRight as DipsRight } from "./Meny/Dips";
import {
  menuDataRight as SidesRight,
  menuDataLeft as SidesLeft,
} from "./Meny/Sides";
import {
  menuDataLeft as DrinksLeft,
  menuDataRight as DrinksRight,
  menuDataMiddle as DrinksMiddle,
} from "./Meny/Drink";

function Cart() {
  const { cartItems, ListItem, removeFromCart } = useContext(StoreComponent);

  console.log("cartItems; ", cartItems);

  console.log("ListItems: ", ListItem);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Artikel</p>
          <p>Namn</p>
          <p>Pris</p>
          <p>Antal</p>
          <p>Totalt</p>
          <p>Ta bort</p>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>

        {Object.keys(cartItems).map((id) => {
          let test = BurgareLeft.find((x) => x.id.toString() === id);
          if (!test) {
            test = BurgareRight.find((x) => x.id.toString() === id);
            if (!test) {
              test = DipsRight.find((x) => x.id.toString() === id);
              if (!test) {
                test = SidesLeft.find((x) => x.id.toString() === id);
                if (!test) {
                  test = SidesRight.find((x) => x.id.toString() === id);
                  if (!test) {
                    test = DrinksRight.find((x) => x.id.toString() === id);
                    if (!test) {
                      test = DrinksLeft.find((x) => x.id.toString() === id);
                      if (!test) {
                        test = DrinksMiddle.find((x) => x.id.toString() === id);
                      }
                    }
                  }
                }
              }
            }
          }
          console.log(test);
          return (
            <div className="cart-items.title cart-items-item">
              <h1>{test.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
