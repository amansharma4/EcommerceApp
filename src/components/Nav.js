import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
const NavComp = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Ecomm App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Image
              src="https://p.kindpng.com/picc/s/30-303412_dark-white-circle-transparent-hd-png-download.png"
              width="30px"
              roundedCircle
            />
            <NavDropdown title="" id="basic-nav-dropdown">
              <LinkContainer to="/profile">
                <NavDropdown.Item>My Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="/cart">My Cart</NavDropdown.Item>
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
