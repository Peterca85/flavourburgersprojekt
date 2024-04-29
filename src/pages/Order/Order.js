import React, { useContext, useState } from "react";
import { StoreComponent } from "../../components/StoreComponents";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../styles/Order.css";

function Order() {
  const navigate = useNavigate(StoreComponent);
  const { getCartTotal } = useContext(StoreComponent);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email:"",
    address:"",
    zip:"",
    city:"",
    phone:"",
    cardnumber:"",
    expired:"",
    cvc:"",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  

  return (
    <form onSubmit={handleSubmit} className="place-order">
      <div className="place-order-left">
        <p className="title">Leverans Information</p>
        <div className="multi-fields">
          <label>
            {" "}
            Förnamn:
            <input type="text" placeholder="Ange Namn" name="name" value={formData.name} onChange={handleChange}></input>
          </label>
          <label>
            Efternamn:
            <input type="text" placeholder="Ange Efternamn" name="lastname"  value={formData.lastname} onChange={handleChange}></input>
          </label>
        </div>
        <label>
          Email:
          <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange}></input>
        </label>
        <div className="multi-fields">
          <label>
            Adress:
            <input type="text" placeholder="Ange Adress" name="address" value={formData.address} onChange={handleChange}></input>
          </label>
        </div>
        <div className="multi-fields">
          <label>
            Postnummer:
            <input type="text" placeholder="Ange Postnummer" name="zip" value={formData.zip} onChange={handleChange}></input>
          </label>
          <label>
            Stad:
            <input type="text" placeholder="Ange Stad" name="city" value={formData.city} onChange={handleChange}></input>
          </label>
        </div>
        <label>
          Telefon:
          <input type="text" placeholder="Ange Telefon" name="phone" value={formData.phone} onChange={handleChange}></input>
        </label>
      </div>
      <div className="place-order-middle">
        <p className="title">Betalnings Information</p>
        <div className="multi-fields">
          <label>
            Kortnummer:
            <input type="text" placeholder="Ange Kortnummer" name="cardnumber" value={formData.cardnumber} onChange={handleChange}></input>
          </label>
        </div>

        <div className="multi-fields">
          <label>
            Utgångsdatum:
            <input type="text" placeholder="MM/YY" name="expired" value={formData.expired} onChange={handleChange}></input>
          </label>
          <label>
            CVC:
            <input type="text" placeholder="CVC" name="cvc" value={formData.cvc} onChange={handleChange}></input>
          </label>
          <input type="submit" value="Submit" />
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

          <Button variant="contained" onClick={() => navigate("/summary")}>
            Betala
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Order;
