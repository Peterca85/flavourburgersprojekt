import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreComponentProvider from "./components/StoreComponents";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreComponentProvider>
    <App />
    </StoreComponentProvider>
  </React.StrictMode>
);
