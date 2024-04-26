import React, { useContext } from "react";
import { StoreComponent } from "../../components/StoreComponents";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/Order.css";

function Order() {
  const navigate = useNavigate(StoreComponent);
  const { getCartTotal } = useContext(StoreComponent);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Leverans Information</p>
        <div className="multi-fields">
        <label> Förnamn:
          <input type="text" placeholder="Ange Förnamn"></input>
          </label>
          <label>Efternamn:
          <input type="text" placeholder="Ange Efternamn"></input>
          </label>
        </div>
        <label>Email:
        <input type="email" placeholder="Ange E-mail"></input>
        </label>
        <div className="multi-fields">
          <label>Adress:
          <input type="text" placeholder="Ange Adress"></input>
          </label>
        </div>
        <div className="multi-fields">
          <label>Postnummer:
          <input type="text" placeholder="Ange Postnummer"></input>
          </label>
          <label>Stad:
          <input type="text" placeholder="Ange Stad"></input>
          </label>
        </div>
        <label>Telefon:
        <input type="text" placeholder="Ange Telefon"></input>
        </label>
      </div>
      <div className="place-order-middle">
        <p className="title">Betalnings Information</p>
        <div className="multi-fields">
          <label>Kortnummer:
          <input type="text" placeholder="Ange Kortnummer"></input>
          </label>
        </div>

        <div className="multi-fields">
          <label>Utgångsdatum:
          <input type="text" placeholder=" Ange MM/YY"></input>
          </label>
          <label>CVC:
          <input type="text" placeholder="Ange CVC"></input>
          </label>
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
              <p>{getCartTotal() === 0 ? 0 : 20} kr</p>
            </div>
            <hr></hr>
            <div className="cart-totals-details">
              <b>Totalt </b>
              <b>{getCartTotal() === 0 ? 0 : getCartTotal() + 20} kr</b>
            </div>
          </div>
 
          <Button variant="contained" onClick={()=>navigate("/summary")}>Betala</Button>
        </div>
      </div>
    </form>
  );
}

export default Order;
