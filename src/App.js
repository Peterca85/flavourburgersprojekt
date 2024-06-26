import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Happenings from "./pages/Happenings";
import kontakt from "./pages/Contact";
import Meny from "./pages/Menu";
import cart from "./pages/Cart";
import order from "./pages/Order/Order";
import sum from "./pages/Order/Summary";


function App() {               
  return (
    <div className="App">
      <React.Fragment>
         <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/omOss" exact Component={About} />
              <Route path="/happenings" exact Component={Happenings} />
              <Route path="/Kontakt" exact Component={kontakt} />
              <Route path="/meny" exact Component={Meny} />
              <Route path="/cart" exact Component={cart} />
              <Route path="/order" exact Component={order} />
              <Route path="/summary" exact Component={sum} />
            </Routes>
            <Footer />
          </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
