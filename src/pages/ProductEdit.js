/** @format */

import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(
    "https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-new-product-speech-bubble-banner-vector-id1154954910?k=6&m=1154954910&s=612x612&w=0&h=uG8AstGU1do53zDialj0cpfU4uiR5rs6Ee0UTQ8d1MQ="
  );
  const [countInStock, setCountInStock] = useState(1);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("inactive");

  const searchArray = (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
    }
  };

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("product"));
    const editProduct = searchArray(productId, product);

    if (!editProduct) {
      history.push("/addproduct");
    } else {
      setName(editProduct.name);
      setPrice(editProduct.price);
      setCategory(editProduct.category);
      setImage(editProduct.image);
      setCountInStock(editProduct.countInStock);
      setDescription(editProduct.description);
      setStatus(editProduct.status);
    }
  }, [history, productId]);

  return (
    <Container>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Status</Form.Label>
          <Form.Control
            required
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            required
            type="string"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="countInStock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter countInStock"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <div className="text-center">
          <Button type="submit" variant="primary">
            Update Item
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ProductEditScreen;
