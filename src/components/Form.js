import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormP = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(
    ""
  );
  const [countInStock, setCountInStock] = useState(1);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("inactive");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addProduct({
      name: name,
      image: image,
      price: price,
      category: category,
      countInStock: countInStock,
      description: description,
      status: status,
    });

    setName("");
    setPrice(0);
    setCategory("");
    setCountInStock(1);
    setDescription("");

    console.log(status);
  };
  return (
    <Form onSubmit={handleSubmit}>
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
          Add Item
        </Button>
      </div>
    </Form>
  );
};

export default FormP;
