import React, { useContext } from "react";
import { StoreComponent } from "../../components/StoreComponents";
import { Button } from "@mui/material";
import "../../styles/Order.css";

function Order() {

  const {getCartTotal} = useContext(StoreComponent);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Leverans Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="Förnamn"></input>
          <input type="text" placeholder="Efternamn"></input>
        </div>
        <input type="email" placeholder="E-post"></input>
        <div className="multi-fields">
          <input type="text" placeholder="Adress"></input>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Postnummer"></input>
          <input type="text" placeholder="Stad"></input>
           </div>
           <input type="text" placeholder="Telefon"></input>
      </div>
      <div className="place-order-middle">
        <p className="title">Betalnings Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="Kort nummer"></input>
        
        </div>
       
        <div className="multi-fields">
          <input type="text" placeholder="MM/YY"></input>
          <input type="text" placeholder="CVC"></input>
           </div>
          
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Varukorg totalt</h2>
          <div>
          <div className="cart-totals-details">
              <p>Summering</p>
              <p>{getCartTotal()} kr</p>
               </div>
               <hr></hr>
            <div className="cart-totals-details">
              <p>Leverans avgift</p> 
              <p>{getCartTotal()===0?0:20} kr</p>
              </div>
              <hr></hr>
            <div className="cart-totals-details"> 
            <b>Totalt </b>
            <b>{getCartTotal()===0?0:getCartTotal()+20} kr</b>
            </div>
          </div>
          <Button variant="contained">Betala</Button>
         </div>
        </div>
      </form>
  );
}

export default Order;
