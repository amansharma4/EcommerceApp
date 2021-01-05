import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Nav";
import Productdisplay from "./components/Productdisplay";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Productdisplay />
    </Router>
  );
};

export default App;
