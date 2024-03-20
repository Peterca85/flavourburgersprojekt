import React from 'react'
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
    <h2>Meny</h2>
    <div className="category">
      <h3>Hamburgare</h3>
      <ul>
        <li>Cheeseburger</li>
        <li>Chicken Burger</li>
        <li>Veggie Burger</li>
        <li>Double Burger</li>
        <li>Bacon Burger</li>
        <li>Jalapeño Fiesta</li>
        <li>Halloumi Burger</li>
      </ul>
    </div>
    <div className="category">
      <h3>Sides</h3>
      <ul>
        <li>Fries</li>
        <li>Sötpotatis Fries</li>
        <li>Chili Cheese</li>
        <li>Lök ringar</li>
      </ul>
    </div>
    <div className="category">
      <h3>Dippar</h3>
      <ul>
        <li>Orginal Dip</li>
        <li>Aioli</li>
        <li>Tryffel Majo</li>
        <li>Chipotle Majo</li>
        <li>Chili Bearnaise</li> 
      </ul>
    </div>
    <div className="category">
      <h3>Dryck</h3>
      <ul>
        <li>Cola</li>
        <li>Fanta</li>
        <li>Sprite</li>
        <li>Vatten</li>
      </ul>
    </div>
  </div>
);
}
export default Menu
