import React, { useContext, useState } from "react";
import { StoreComponent } from "../../components/StoreComponents";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { Typography } from "@mui/material";
import "../../styles/Order.css";

function Order() {
  const navigate = useNavigate(StoreComponent);
  const { getCartTotal } = useContext(StoreComponent);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    zip: "",
    city: "",
    phone: "",
    cardnumber: "",
    expired: "",
    cvc: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    if (name === "phone" || name === "zip" || name === "cardnumber") {
      newValue = value.replace(/\D/g, "");
    }
    if (name === "cvc") {
      newValue = value.replace(/\D/g, "").slice(0, 3);
    }
    if (name === "expired") {
      newValue = value.replace(/\D/g, "").slice(0, 4);
    }
    setFormData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = "Fältet är obligatoriskt";
      }
    });

  setFormErrors(errors);
  if (Object.keys(errors).length === 0) {
    const cartTotal = getCartTotal();

    const tableData = [
      {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        address: formData.address,
        zip: formData.zip,
        city: formData.city,
        phone: formData.phone,
      }
    ];

    navigate("/summary", { state: { formData: formData, cartTotal: cartTotal, tableData: tableData } });
  }
};


  return (
    <form onSubmit={handleSubmit} className="place-order">
      <div className="place-order-left">
        <p className="title">Leverans Information</p>
        <div className="multi-fields">
          <label>
            {" "}
            Förnamn:
            <input
              type="text"
              placeholder="Ange Namn"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></input>
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </label>
          <label>
            Efternamn:
            <input
              type="text"
              placeholder="Ange Efternamn"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            ></input>
            {formErrors.lastname && (
              <span className="error">{formErrors.lastname}</span>
            )}
          </label>
        </div>
        <label>
          Email:
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </label>
        <div className="multi-fields">
          <label>
            Adress:
            <input
              type="text"
              placeholder="Ange Adress"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></input>
            {formErrors.address && (
              <span className="error">{formErrors.address}</span>
            )}
          </label>
        </div>
        <div className="multi-fields">
          <label>
            Postnummer:
            <input
              type="text"
              placeholder="Ange Postnummer"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            ></input>
            {formErrors.zip && <span className="error">{formErrors.zip}</span>}
          </label>
          <label>
            Stad:
            <input
              type="text"
              placeholder="Ange Stad"
              name="city"
              value={formData.city}
              onChange={handleChange}
            ></input>
            {formErrors.city && (
              <span className="error">{formErrors.city}</span>
            )}
          </label>
        </div>
        <label>
          Telefon:
          <input
            type="text"
            placeholder="Ange Telefon"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          ></input>
          {formErrors.phone && (
            <span className="error">{formErrors.phone}</span>
          )}
        </label>
      </div>
      <div className="place-order-middle">
        <p className="title">Betalnings Information</p>
        <div className="multi-fields">
          <label>
            Kortnummer:
            <input
              type="text"
              placeholder="Ange Kortnummer"
              name="cardnumber"
              value={formData.cardnumber}
              onChange={handleChange}
            ></input>
            {formErrors.cardnumber && (
              <span className="error">{formErrors.cardnumber}</span>
            )}
          </label>
        </div>

        <div className="multi-fields">
          <label>
            Utgångsdatum:
            <input
              type="text"
              placeholder="MM/YY"
              name="expired"
              value={formData.expired}
              onChange={handleChange}
            ></input>
            {formErrors.expired && (
              <span className="error">{formErrors.expired}</span>
            )}
          </label>
          <label>
            CVC:
            <input
              type="text"
              placeholder="CVC"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
            ></input>
            {formErrors.cvc && <span className="error">{formErrors.cvc}</span>}
          </label>
         </div>
         <Tooltip title= {<Typography fontSize={15}> Betala ditt köp </Typography>}arrow>
        <Button variant="contained" input type="submit" value="Submit" > Betala</Button>
        </Tooltip>
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
        </div>
      </div>
    </form>
  );
}

export default Order;
