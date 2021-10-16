import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAll from "../../../hooks/useAll";
import logo from "../../../Images/ICON/logo2.png";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { firebase } = useAll();
  const {
    signInWithEmail,
    signInWithAny,
    googleProvider,
    facebookProvider,
    twitterProvider,
  } = firebase;

  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmail(userEmail, userPassword);
  };

  return (
    <div className="form-signin">
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 form-signin__label"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className="form-signin__input"
            onBlur={emailChange}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="form-signin__label"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-signin__input"
            onBlur={passwordChange}
          />
        </FloatingLabel>
        <button type="submit" className="btn-signin">
          Sign In
        </button>
      </Form>
      <p>
        Don't have an account?{" "}
        <Link style={{ color: "#f91944" }} to="/form/signup">
          Sign Up
        </Link>
      </p>
      <p className="my-3 other-options">Or sign in with</p>
      <div className="btn-box">
        <button
          className="btn-social"
          onClick={() => signInWithAny(googleProvider)}
        >
          {" "}
          <i class="bi bi-google"></i>
        </button>
        <button
          className="btn-social"
          onClick={() => signInWithAny(facebookProvider)}
        >
          <i class="bi bi-facebook"></i>
        </button>
        <button
          className="btn-social"
          onClick={() => signInWithAny(twitterProvider)}
        >
          <i class="bi bi-twitter"></i>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
