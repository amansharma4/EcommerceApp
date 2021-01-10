import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavComp = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data) {
      setCount(data.length);
    }
  }, []);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>EComm App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/addproduct">
              <Nav.Link>All products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>My cart({count})</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Aman" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <LinkContainer to="/cart">
                <NavDropdown.Item>My Cart</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="/order">My orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/setting">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComp;