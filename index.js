import React from "react";
import ReactDOM from "react-dom/client";
import "./src/styles/index.css";
import Home from "./src/screens/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
