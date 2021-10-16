import React, { useState } from "react";
import logo from "../../../Images/ICON/logo2.png";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAll from "../../../hooks/useAll";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const { firebase } = useAll();
  const { createNewAccountWithEmail, error, getUserInformation } = firebase;
  const [myError, setMyError] = useState(error);

  /* ---------------- COLLECT USER INFORMATION FROM SIGNUP FORM --------------- */
  const getEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const getPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const getName = (e) => {
    setUserName(e.target.value);
  };
  const getAddress = (e) => {
    setUserAddress(e.target.value);
  };

  /* ------------------------ HANDLE CREATE NEW ACCOUNT ----------------------- */
  const handleCreateNewAccount = (e) => {
    e.preventDefault();
    createNewAccountWithEmail(userEmail, userPassword, userName, userAddress);
  };

  return (
    <div className="form-sign">
      <img src={logo} alt="" />

      {myError && (
        <small className="text-center d-block text-danger mb-3">
          {" "}
          {myError}
        </small>
      )}

      <Form onSubmit={handleCreateNewAccount}>
        <FloatingLabel
          controlId="floatingInput"
          label="Your Name"
          className="mb-3 form-sign__label"
        >
          <Form.Control
            type="text"
            placeholder="your name"
            className="form-sign__input"
            onBlur={getName}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="address"
          className="mb-3 form-sign__label"
        >
          <Form.Control
            type="text"
            placeholder="address"
            className="form-sign__input"
            onBlur={getAddress}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 form-sign__label"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className="form-sign__input"
            onBlur={getEmail}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="form-sign__label"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-sign__input"
            onBlur={getPassword}
          />
        </FloatingLabel>
        <button type="submit" className="btn-signin">
          Sign Up
        </button>
      </Form>

      <p>
        Already have an account?{" "}
        <Link style={{ color: "#f91944" }} to="/form/signin">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
