import React from 'react';
import './App.css';
import Navbar from './components/Nav'
import Productdisplay from "./components/Productdisplay";

const App = ()=> {
  return (
    <div className="App">
      <Navbar />
      <Productdisplay />
    </div>
  );
}

export default App;
