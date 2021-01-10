import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Form from "../components/Form";

const AddProductScreen = () => {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("product"));
    if (!data) {
      localStorage.setItem("product", "[]");
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = JSON.parse(localStorage.getItem("product"));
    newProduct.push(product);

    localStorage.setItem("product", JSON.stringify(newProduct));
  };

  return (
    <Container>
      <h1 className="text-center">Add Product</h1>
      <Form addProduct={addProduct} />
    </Container>
  );
};

export default AddProductScreen;
