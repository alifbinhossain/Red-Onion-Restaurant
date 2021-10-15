import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Images/ICON/logo2.png";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <i class="bi bi-cart"></i>
              </Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <button className="ms-3 btn-signup">Sign Up</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
