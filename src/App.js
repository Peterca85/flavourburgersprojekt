import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Happenings from "./pages/Happenings";

function App() {
  return (
    <div className="App">
  <Router>
  <Navbar />
  <Routes>
<Route path="/" exact Component={Home}/>
<Route path="/omOss" exact Component={About}/>
<Route path="/happenings" exact Component={Happenings}/>
  </Routes>
  <Footer/>
  </Router>
    </div>
  );
}

export default App;
