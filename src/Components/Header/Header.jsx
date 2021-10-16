import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAll from "../../hooks/useAll";
import logo from "../../Images/ICON/logo2.png";

const Header = () => {
  const { firebase } = useAll();
  const { user, logOut, loading } = firebase;
  console.log(user);

  const history = useHistory();
  const goToSignUp = () => {
    history.push("/form/signup");
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <i class="bi bi-cart icon-cart"></i>
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
    </>
  );
};

export default Header;
