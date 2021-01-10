import React from "react";
import "./App.css";
import { BrowserRouter as Router ,Route} from "react-router-dom";
import Navbar from "./components/Nav";
// import Productdisplay from "./components/Productdisplay";
import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import AddProduct from './pages/AddProduct'
import ProductEdit from './pages/ProductEdit'
import ProductList from './pages/ProductList'
const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Productdisplay /> */}
      <Route path="/" exact component={HomePage} />
      <Route path="/addproduct" exact component={ProductList} />
      <Route path="/add" exact component={AddProduct} />
      <Route path="/edit/:id" exact component={ProductEdit} />
      <Route path="/cart" exact component={Cart} />
    </Router>
  );
};

export default App;
