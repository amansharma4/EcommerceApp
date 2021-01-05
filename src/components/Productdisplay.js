import React from "react";
import {data} from "../data";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Productdisplay = () => {
  const datas = data.map((item) => {
    return (
      <Col lg={4} md={6} sm={12} key={item.id}>
        <Card className="my-3 ">
          <Card.Img variant="top" src={item.image} className="styleImage" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Title>{item.price}</Card.Title>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <div>
      <Container className="mt-3">
        <Row>{datas}</Row>
      </Container>
    </div>
  );
};

export default Productdisplay;
