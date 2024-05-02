import { createContext, useEffect, useState } from "react";
import ListItem from "./ListItem";
import {
  menuDataLeft as BurgareLeft,
  menuDataRight as BurgareRight,
} from "../pages/Meny/Burgare";
import {
  menuDataRight as DipsRight,
  menuDataLeft as DipsLeft,
} from "../pages/Meny/Dips";
import {
  menuDataRight as SidesRight,
  menuDataLeft as SidesLeft,
} from "../pages/Meny/Sides";
import {
  menuDataLeft as DrinksLeft,
  menuDataRight as DrinksRight,
  menuDataMiddle as DrinksMiddle,
} from "../pages/Meny/Drink";

export const StoreComponent = createContext(null);

const StoreComponentProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId];
      } else if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      }
      return updatedCart;
    });
  };

  const sumItemsCart = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const getCartTotal = () => {
    let totalAmount = 0;

    Object.keys(cartItems).forEach((id) => {
      let item = BurgareLeft.find((x) => x.id.toString() === id);
      if (!item) {
        item = BurgareRight.find((x) => x.id.toString() === id);
      }
      if (!item) {
        item = DipsLeft.find((x) => x.id.toString() === id);
      }
      if (!item) {
        item = DipsRight.find((x) => x.id.toString() === id);
      }
      if (!item) {
        item = SidesLeft.find((x) => x.id.toString() === id);
      }
      if (!item) {
        item = SidesRight.find((x) => x.id.toString() === id);
      }
      if (!item) {
        item = DrinksRight.find((x) => x.id.toString() === id);
      }
      if (!item) {
        item = DrinksLeft.find((x) => x.id.toString() === id);
      }
      if (!item) {
        item = DrinksMiddle.find((x) => x.id.toString() === id);
      }

      if (item) {
        totalAmount += item.price * cartItems[id];
      }
    });

    return totalAmount;
  };

  const contextValue = {
    ListItem,
    sumItemsCart,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
  };

  return (
    <StoreComponent.Provider value={contextValue}>
      {props.children}
    </StoreComponent.Provider>
  );
};

export default StoreComponentProvider;
