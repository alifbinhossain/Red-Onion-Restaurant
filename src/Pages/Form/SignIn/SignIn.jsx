import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAll from "../../../hooks/useAll";
import logo from "../../../Images/ICON/logo2.png";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase } = useAll();
  const {
    setLoading,
    signInWithEmail,
    signInWithAny,
    googleProvider,
    facebookProvider,
    twitterProvider,
  } = firebase;

  const location = useLocation();
  const history = useHistory();

  const redirectURL = location.state?.from || "/home";

  const handleSignInWithAny = (provider) => {
    signInWithAny(provider)
      .then((result) => {
        history.push(redirectURL);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmail(userEmail, userPassword)
      .then((result) => {
        history.push(redirectURL);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="form-sign" data-aos="fade-in">
      <img src={logo} alt="" />

      {error && (
        <small className="text-danger d-block text-center my-3">{error}</small>
      )}

      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 form-sign__label"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className="form-sign__input"
            onBlur={emailChange}
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
          onClick={() => handleSignInWithAny(googleProvider)}
        >
          {" "}
          <i class="bi bi-google"></i>
        </button>
        <button
          className="btn-social"
          onClick={() => handleSignInWithAny(facebookProvider)}
        >
          <i class="bi bi-facebook"></i>
        </button>
        <button
          className="btn-social"
          onClick={() => handleSignInWithAny(twitterProvider)}
        >
          <i class="bi bi-twitter"></i>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
