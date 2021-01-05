import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Image,
} from "react-bootstrap";
const NavComp = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Ecomm App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Image
              src="https://p.kindpng.com/picc/s/30-303412_dark-white-circle-transparent-hd-png-download.png"
              width="30px" roundedCircle
            />
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComp;
