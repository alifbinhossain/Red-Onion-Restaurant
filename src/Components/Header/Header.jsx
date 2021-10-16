import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAll from "../../hooks/useAll";
import logo from "../../Images/ICON/logo2.png";

const Header = () => {
  const { firebase, carts } = useAll();
  const { user, logOut, loading } = firebase;
  const { totalItems } = carts;

  const history = useHistory();
  const goToSignUp = () => {
    history.push("/form/signup");
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <button type="button" class="btn-cart-badge position-relative">
                <i class="bi bi-cart icon-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {totalItems}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>

              {loading ? null : user ? (
                <div className="d-flex align-items-center">
                  <i class="bi bi-person-circle icon-profile ms-4 me-2"></i>
                  <span className="me-4">{user?.displayName}</span>

                  <button className=" btn-signup" onClick={logOut}>
                    Log out
                  </button>
                </div>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/form/signin">
                    Log In
                  </Nav.Link>
                  <button className="ms-3 btn-signup" onClick={goToSignUp}>
                    Sign Up
                  </button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
