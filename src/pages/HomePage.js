import React, { useState, useEffect } from "react";
import Product from "../components/Productdisplay";

const HomeScreen = () => {
  const [localStorageProducts, setLocalStorageProducts] = useState([
    // {
    //   id: 1,
    //   name: "MacBook Air",
    //   image: "https://images.unsplash.com/photo-1606248896999-387b3a9f621c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    //   description:
    //     "MacBook Air Laptop",
    //   brand: "Apple",
    //   category: "Electronics",
    //   price: 89.99,
    //   countInStock: 10,
    //   rating: 4.5,
    //   numReviews: 12,
    // },
  ]);

  const searchArray = (id, array) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (!data) {
      localStorage.setItem("cart", "[]");
    }

    const productsFromLocalStorage = JSON.parse(
      localStorage.getItem("product")
    );

    if (productsFromLocalStorage) {
      setLocalStorageProducts(productsFromLocalStorage);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = JSON.parse(localStorage.getItem("product"));
    const getCart = searchArray(e.target.id, productData);

    const cartItem = JSON.parse(localStorage.getItem("cart"));
    cartItem.push(getCart);
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  return <Product products={localStorageProducts} submit={handleSubmit} />;
};

export default HomeScreen;
